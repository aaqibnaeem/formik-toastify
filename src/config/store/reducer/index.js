const mem = {
    fullName: "",
    rollNumber: "",
    education: "",
    gradeOrGPA: "",
    gender: "",
    skills: ""
}

export default (state = mem, action) => {
    switch (action.type) {
        case "handleChange":
            let tname = action.payload.target.name
            let tval = action.payload.target.value
            console.log(tname, tval)
            return { ...state, [tname]: tval }
        case 'clear':
            return {
                fullName: "",
                rollNumber: "",
                education: "",
                gradeOrGPA: "",
                gender: "",
                skills: ""
            }
        default:
            return state
    }
}