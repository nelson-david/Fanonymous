import HeaderSection from "@/app/components/section/HeaderSection";
import PageLayout from "@/app/layouts/PageLayout";
import MoreSection from "@/app/components/section/MoreSection";
import CanDoSection from "@/app/components/section/CanDoSection";

const Home = () => {
    return (
        <PageLayout>
            <HeaderSection />
            <MoreSection />
            <CanDoSection />
        </PageLayout>
    );
};

export default Home;
