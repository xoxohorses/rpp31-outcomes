import styles from '../styles/Home.module.css';
import data from '../data.js';
import helper from '../helper.js';

import Picture from './Picture.js';
import Image from 'next/image'
import Spacer from './Spacer.js';

export default function People() {
  const people = data.map((person, index) => {
    return (
      <tr key={index}>
        <td>
          <Picture src={person.photo} size="75vw" />
        </td>
        <td>{`${person.firstName} ${person.lastName.slice(0, 1)}.`}</td>
        <td>{person.role ? person.role : 'N/A'}</td>
        <td>{person.companyLogo ?
          <div className={styles.imageWrapper}>
            <Image src={person.companyLogo} alt="Company Logo" layout="fill" objectFit="contain"/>
          </div> : 'Still Looking!'}</td>
      </tr>
    );
  });

  return (
    <div className={styles.section}>
      <code className={styles.code}>People</code>
      <table className={styles.peopleTable}>
        <thead>
          <tr>
            <th colSpan="2"></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{people}</tbody>
      </table>
    </div>
  );
}
