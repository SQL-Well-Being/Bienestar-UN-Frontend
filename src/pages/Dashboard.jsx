import useToken from "../hooks/useToken";


function Dashboard(){
    const {token, setToken} = useToken();

    return (
        <>
        <h2>{token.username}</h2>
        <p>{token.role}</p>
        </>
    );
}

export default Dashboard;