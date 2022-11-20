import "/src/componets/Main Component/MainContent.css";

const MainContent = (props) => {
  return (
    <main className={`mainClass${props.isDarkMode ? " dark" : ""}`}>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jorden Walke</li>
        <li>Has well over 100K stars in GitHub</li>
        <li>Is Maintained my Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default MainContent;
