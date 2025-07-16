import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Prototype playground',
    Svg: require('@site/static/img/prototype_playground.svg').default,
    description: (
      <>
        My digital sandbox for building weird stuff. Half-finished projects, crazy experiments, and the occasional breakthrough. Frequent meltdowns.
      </>
    ),
  },
  {
    title: 'Brain dumps',
    Svg: require('@site/static/img/brain_dumps.svg').default,
    description: (
      <>
        The real thoughts behind the code. Mistakes I made, lessons I learned, and the random epiphanies that happen at 2am.
      </>
    ),
  },
  {
    title: 'Tech tales',
    Svg: require('@site/static/img/tech_tales.svg').default,
    description: (
      <>
        Stories from the trenches of tech. Project journeys, career adventures, and the human side of building things that matter.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
