import React from 'react'
import Head from 'next/head'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import MessagesGrid from '../../components/pages/dashboard/admin/messages/MessagesGrid'
import PrivateTemplate from "../../templates/PrivateTemplate";

export default function messages() {
    return (
        <PrivateTemplate>
            <Head>
                <title>Message | Fourth IT Academy</title>
            </Head>

            <DashboardLayout>
                <MessagesGrid />
            </DashboardLayout>
        </PrivateTemplate>
    )
}
