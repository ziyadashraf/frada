"use client"
import CustomerFormsHolder from "../../../components/CustomerDashboard/CustomerForms/CustomerFormsHolder";
import InformationCustomer from "../../../components/CustomerDashboard/CustomerForms/InformationCustomer/InformationCustomer";
import Profileperson from "../../../components/Dashbboardamobile/Profileperson/Profileperson";
import Header from "../../../components/Header/Header";

export default function Dashboard() {
    return (
        <div>

            <CustomerFormsHolder />
            <Profileperson />
        </div>
    )
}