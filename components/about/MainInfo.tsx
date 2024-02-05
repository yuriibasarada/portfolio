import styles from '@/styles/about.module.scss'


export const MainInfo = () => {
  return (
    <div className='container'>
      <div className={styles.mainInfo}>
        <ol>
          <li>
            <span>import</span> <span>aboutMe</span> <span>from</span> <span>‘./portfolio’</span>
          </li>
          <li></li>
          <li><span>// </span>I'm Yuri Basarada, an accomplished FullStack developer with extensive experience</li>
          <li><span>// </span>In the Backend realm, I specialize in PHP (Native/Laravel/ReactPHP), SQL (MySQL/MariaDB)
            and MongoDB
          </li>
          <li><span>// </span>On the Frontend, my expertise includes JavaScript (ReactJs/VueJs), CSS (SASS) and HTML.
          </li>
          <li><span>// </span>I have a strong background in various technologies such as AWS, GIT, Postman and Google
            APIs.
          </li>
          <li></li>
          <li><span>// </span>I am well-versed in the best practices of web development, ensuring clean and maintainable
            code.
          </li>
          <li><span>// </span>My problem-solving skills and attention to detail enable me to overcome challenges and
            deliver
          </li>
          <li><span>// </span>optimal solutions for complex projects. With a keen eye for design and a passion for
            creating
          </li>
          <li><span>// </span>intuitive user experiences, I bring a holistic approach to every project I undertake.</li>
          <li className={styles.comment}>
            <br/>
            /**<br/>
            I'm Yuri Basarada, an accomplished FullStack developer with extensive experience
            In the Backend realm, I specialize in PHP (Native/Laravel/ReactPHP), SQL (MySQL/MariaDB) and MongoDB
            On the Frontend, my expertise includes JavaScript (ReactJs/VueJs), CSS (SASS) and HTML.
            I have a strong background in various technologies such as AWS, GIT, Postman and Google APIs.
            <br/> <br/>
            I am well-versed in the best practices of web development, ensuring clean and maintainable code.
            My problem-solving skills and attention to detail enable me to overcome challenges and deliver
            optimal solutions for complex projects. With a keen eye for design and a passion for creating
            intuitive user experiences, I bring a holistic approach to every project I undertake. <br/>
            **/
          </li>
        </ol>
      </div>
    </div>
  )
}