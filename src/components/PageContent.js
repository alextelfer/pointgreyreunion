import classes from './PageContent.module.css';

function PageContent({ title, children }) {
  return (
    <div className={classes.div}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default PageContent;
