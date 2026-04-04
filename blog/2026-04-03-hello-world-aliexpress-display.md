---
slug: hello-world-aliexpress-display
title: "Hello World on a cheap Aliexpress ESP8266 Display"
authors: [sophie]
tags: [project-logs, tutorials, development]
date: 2026-04-03
---

# Hello World on a cheap Aliexpress ESP8266 Display (on macOS)

I bought this tiny yellow cube off Aliexpress for about $18 (canadian monopoly dollars). There was no documentation, and no instructions on the listing. There was just a photo and a very short description containing "development board". Obviously, I had to figure out how to make it do something. That's the type of gambling I do.

<!-- truncate -->

## Quick recap

In my [previous post](/blog/cheap-and-cute-aliexpress-display), I tore the thing apart and identified what's inside:

- An **ESP-12S** module (ESP8266 with 4MB flash and WiFi)
- A **1.54" 240x240 IPS LCD** driven by an **ST7789** controller over SPI
- A **CH340K** USB-to-serial chip for programming
- The board is helpfully labeled **"ESP 1.54-LCD v1.0"**

The pin mapping for the display (which I figured out by tracing the PCB) is:

| Function | GPIO |
|----------|------|
| MOSI     | 13   |
| SCLK     | 14   |
| CS       | 15   |
| DC       | 2    |
| RST      | 0    |

Now let's actually make it do something.

## Installing the driver

The CH340K needs a driver on macOS. Download it from the [WCH github](https://github.com/WCHSoftGroup/ch34xser_macos) and install it.

Here's the gotcha: after installing, macOS blocks the system extension until you manually approve it. It took me a while to figure out why I could not connect to my device until some googling gave me the answer. Go to **System Settings > General > Login Items & Extensions > Driver Extensions** and allow it. You can verify it's active with:

```bash
systemextensionsctl list
```

Once approved, plug the board in and check:

```bash
ls /dev/cu.wchusbserial*
```

You should see something like `/dev/cu.wchusbserial21310`.

## Setting up PlatformIO

I'm using [PlatformIO](https://platformio.org/) to build and flash. Install it with:

```bash
brew install platformio
```

Create a new project:

```bash
mkdir hello-display && cd hello-display
pio init --board esp12e
```

Now replace the generated `platformio.ini` with this configuration:

```ini
[env:esp8266]
platform = espressif8266
board = esp12e
framework = arduino
monitor_speed = 115200
monitor_rts = 0
monitor_dtr = 0
upload_port = /dev/cu.wchusbserial*
monitor_port = /dev/cu.wchusbserial*
lib_deps =
    TFT_eSPI
build_flags =
    -DUSER_SETUP_LOADED=1
    -DST7789_DRIVER=1
    -DTFT_WIDTH=240
    -DTFT_HEIGHT=240
    -DTFT_MISO=-1
    -DTFT_MOSI=13
    -DTFT_SCLK=14
    -DTFT_CS=15
    -DTFT_DC=2
    -DTFT_RST=0
    -DLOAD_GLCD=1
    -DLOAD_FONT2=1
    -DLOAD_FONT4=1
    -DSPI_FREQUENCY=40000000
```

A few things to note:

- **`USER_SETUP_LOADED=1`** tells TFT_eSPI to skip its own config file and use our build flags instead. This is way cleaner than editing the library's `User_Setup.h`.
- **`monitor_rts = 0` and `monitor_dtr = 0`** prevent the serial monitor from resetting the board every time you connect. The CH340K's DTR/RTS lines trigger a reset by default, which is super annoying when you're just trying to watch logs.
- The pin numbers match the board's SPI wiring to the ST7789 display.

## The firmware

Create `src/main.cpp`:

```cpp
#include <Arduino.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

void setup() {
    Serial.begin(115200);
    Serial.println("Hello World!");

    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setTextSize(2);
    tft.setCursor(40, 100);
    tft.println("Hello World!");
}

void loop() {
}
```

## Flash it

```bash
pio run -t upload
```

PlatformIO will download the ESP8266 toolchain and the TFT_eSPI library automatically on the first run. After that, it compiles and flashes over USB.

If the upload fails with a serial port error, make sure:
1. The serial monitor isn't running (it holds the port)
2. The USB cable is plugged in (not just charging — some cables are power-only)
3. The CH340K driver is actually approved (check System Settings)

## It works!

You should see "Hello World!" on the screen. Now, the sky is the limit.

After some research, I found that many versions of that kind of device exist, for a similar price tag. Some of them are using an ESP-32 and
a touch button on top. They sell for about $25 (canadian dollars) right now. I am considering getting one to get bluetooth and at least some
way to turn on/off the screen or have some controls. Maybe I'll create a small solar panel and battery level monitor for our camper van since
there's an open API I can use to get readings with a bluetooth connection.
