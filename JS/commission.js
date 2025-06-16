function updateDescr(clickedID) {
    var timestampContainer = document.getElementById("timestampContainer");
    var descLabel = document.getElementById("descLabel");
    var descriptionBox = document.getElementById("describe");
    var printLabel = document.getElementById("printLabel");
    var printInput = document.getElementById("printInput");
    var extraInfo = document.getElementsByClassName("extra_info_time");
    var checkboxes = document.querySelectorAll("input[type='checkbox']");

    Array.from(extraInfo).forEach(fields => {
        fields.style.display = "none";
    });

    checkboxes.forEach(checkbox => {
        checkbox.checked = (checkbox.id === clickedID);
    });

    if (clickedID === "vids_edit" || clickedID === "Com_2D_Ani" || clickedID === "Com_3D_Ani") {
        timestampContainer.style.display = "block";
    } else {
        timestampContainer.style.display = "none";
    }

    var descriptions = {
        "vids_edit": "Describe the video edit you need.",
        "drawing": "Describe the drawing style and subject.",
        "Com_2D_Ani": "Provide details for the 2D animation.",
        "Com_3D_Ani": "Describe the 3D animation requirements.",
        "Com_3D_Model": "Describe the 3D model specifications.",
        "Com_3D_Print": "Specify the details for 3D printing."
    };

    var txtPrmpt = descriptions[clickedID] || "";

    if (txtPrmpt !== "") {
        descLabel.style.display = "block";
        descLabel.textContent = "Commission Details";
        descriptionBox.style.display = "block";
        descriptionBox.placeholder = txtPrmpt;
    } else {
        descLabel.style.display = "none";
        descriptionBox.style.display = "none";
    }

    if (clickedID === "Com_3D_Print") {
        printLabel.style.display = "block";
        printInput.style.display = "block";
    } else {
        printLabel.style.display = "none";
        printInput.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    var extraInfo = document.getElementsByClassName("extra_info_time");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click", function () {
            Array.from(extraInfo).forEach(fields => {
                fields.style.display = "none";
            });

            if (this.id === "vids_edit" || this.id === "Com_2D_Ani" || this.id === "Com_3D_Ani") {
                document.querySelector("#vid_info, #" + this.id + "_info").style.display = "block";
            }
        });
    });
});
