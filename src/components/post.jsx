
export const Post = ({title, body}) => {
    return (
        <div className="post">
            <div className="post-title">{title}</div>
            <div className="body">{body}</div>
        </div>
    )
}