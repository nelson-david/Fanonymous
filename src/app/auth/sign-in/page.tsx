import SignInContent from "@/app/components/section/SignInContent";
import AuthLayout from "@/app/layouts/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fanonymous",
    description: "Fanonymous",
};

const SignIn = () => {
    return (
        <AuthLayout>
            <div>
                <SignInContent />
            </div>
        </AuthLayout>
    );
};

export default SignIn;
