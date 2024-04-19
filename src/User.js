const User = ({name,avatar,link}) => {
    return ( 
        <div className="user-container">
            <h1>{name}</h1>
            <a href={link}>
                <img src={avatar} alt={`Profile pricture of ${name}`}/>
            </a>
        </div>
    );
}
 
export default User;