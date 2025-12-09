const Lead = require('../Models/leadModel');
const User = require('../Models/userModel');

const AddLead = async (req, res) => {
    try {

        const { phoneNumber, sources, priority, tag, addedBy } = req.body
        if (!phoneNumber || !sources || !priority || !tag || !addedBy) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const existAddedBy = await User.findById(addedBy)
        if (!existAddedBy) {
            return res.status(400).json({ success: false, message: "AddedBy Id is Invalid" });
        }

        const existPhone = await Lead.findOne({ phoneNumber })
        if (existPhone) {
            return res.status(400).json({ success: false, message: "Phone number is already exist " });
        }

        const newLead = await Lead.create(req.body)
        return res.status(200).json({ success: true, message: "Lead Added", newLead })
    } catch (error) {
        return res.status(500).json({ success: true, message: "Internal Server Error" })
    }
}

const getLeads = async (req, res) => {
    try {
        const { addedBy } = req.params
        const leads = await Lead.find({ addedBy })
            .populate('sources')
            .populate('priority')
            .populate('tag')
            .populate('addedBy')


        if (!leads) return res.status(404).json({ success: false, message: "Leads Not Available" })

        res.status(200).json({ success: false, message: "Leads found successfully", leads })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", error })
    }
}




// const assignLead = async (req, res) => {
//     try {
//         const { selectedEmp, selectedLead } = req.body
//         const leads = await User.findByIdAndUpdate(selectedLead,
//             { assignedTo: selectedEmp },
//             {new:true}
//         )
//         return res.status(200).json({ success: false, message: "Assigned Successfully", leads })
//     } catch (error) {
//         console.log(error);
//     }
// }


const assignLead = async (req, res) => {
    try {
        const { selectedEmp, selectedLead } = req.body;
        if(!selectedEmp || !selectedLead) return res.json("All fiels required")
        const leads = await User.findByIdAndUpdate(
            selectedLead,
            { assignedTo: selectedEmp },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Assigned Successfully",
            leads
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};

module.exports = { AddLead, getLeads, assignLead }