
import style from "./post.module.css"

export const Post =({task, deletePost, index, edit})=>{
	return (
				<div className={style.postWrapper}>
					<span className={style.postTitle}>{Object.values(task)[1]}</span>
					<div className={style.postButtons}>
						<div className={style.buttonWrapper}>
						<button onClick={() => edit(Object.values(task)[0])}>Редактировать</button>
						<button onClick={() => deletePost(Object.values(task)[0])}>Удалить</button>
						</div>
					</div>
				</div>
			)
}

export default Post