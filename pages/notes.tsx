import { NextPage } from 'next';
import { LogoutIcon, DocumentIcon } from '@heroicons/react/solid';
import { supabase } from '@/utils/supabase';
import { Layout } from '@/components/Layout';

const Notes: NextPage = () => {
    const signOut = () => {
        supabase.auth.signOut();
    };

    return (
        <Layout title="Notes">
            <LogoutIcon
                className="next-blue-500 mb-6 h-6 w-6 cursor-pointer"
                onClick={signOut}
            />
        </Layout>
    );
};

export default Notes;
