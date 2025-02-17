import SignUpContent from "@/app/components/section/SignUpContent";
import AuthLayout from "@/app/layouts/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fanonymous",
    description: "Fanonymous",
};

const SignUp = () => {
    return (
        <AuthLayout>
            <div>
                <SignUpContent />
            </div>
        </AuthLayout>
    );
};

export default SignUp;
