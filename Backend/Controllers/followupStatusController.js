const FollowUpStatus = require('../Models/followupStatusModel')


const createFollowUpStatus = async (req, res) => {

    try {
        const { statusName, addedBy } = req.body

        if (!addedBy || !statusName) {
            return res.status(500).json({ succes: false, message: "All fields are required" })
        }
        const followUpStatus = await FollowUpStatus.create(req.body)
        return res.status(200).json({ success: true, message: "followUpStatus created successfully", followUpStatus })

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server error", error })
    }
}


module.exports = { createFollowUpStatus }