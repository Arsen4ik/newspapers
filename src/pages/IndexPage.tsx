import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

const IndexPage = () => {
    return (
        <section className="flex flex-row gap-12 py-14 pl-28 pr-7 justify-between">
            <Main />
            <Sidebar />
        </section>
    );
}

export default IndexPage;