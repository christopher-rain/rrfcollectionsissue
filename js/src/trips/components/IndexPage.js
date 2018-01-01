import React from "react";
import Form from "./Form";

const IndexPage = () => (
    <div>
        <Form
            formModel="forms.reservation.trips[0]"
            buttons={[
                {
                    label: "Add Another Trip",
                    textLink: true,
                    onClick: () => {
                        if (this.props.isFormValid) {
                            console.log("Valid Form");
                        } else {
                            console.log("Not Valid Form");
                        }
                    }
                },
                {
                    label: "Continue To Next Step",
                    loading: false
                }
            ]}
            onSubmit={() => console.log("On form Submit")}
        />
    </div>
);

export default IndexPage;
