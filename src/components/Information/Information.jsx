import styles from './Information.module.css';

export const Information = ({ statusSign }) => {
	return <InformationLayout>{statusSign}</InformationLayout>;
};

const InformationLayout = ({ children }) => {
	return <div className={styles.infoBlock}>{children}</div>;
};
