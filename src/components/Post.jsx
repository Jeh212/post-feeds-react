import styles from "./Post.module.css";

function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/jeh212.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Jean Carlos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 11:13" dateTime="2022-09-05">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti</p>
        <p>
          perspiciatis earum autem est commodi consequuntur impedit similique
        </p>
        <p>
          <a href="">#novoProjeto</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixa seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
export { Post };
