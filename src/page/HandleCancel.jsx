const handleCancel = () => {
    // setData({
    //     name: "",
    //     Age: "",
    //     email: "",
    //     Address: "",
    //     phoneNumber: "",
    //     gender: "", 
    //     job: "",
    //     Designation: "",
    //     Experience: "",
    //     Company: ""
        
    // });

    // const clearedData = fields.reduce((acc, field) => {
    //     acc[field.name] = ""; 
    //     return acc;
    // }, {});
    // setData(clearedData);

    // setData(
    //     Object.assign(
    //       {},
    //       ...fields.map(field => ({ [field.name]: "" }))
    //     )
    //   );  

    const clearedData = {};
    fields.map((field) => {
    clearedData[field.name] = ""; 
    });
    setData(clearedData);

    toast.error("Values Cleared", { autoClose: 1500 });
    setError(null);
};






if (Object.values(data).some(field => field === "")) {
    // setError("Data is empty");	        } catch (error) {
    toast.error("Mandatory to fill all the fields", {autoClose:1500});
    return;	
}