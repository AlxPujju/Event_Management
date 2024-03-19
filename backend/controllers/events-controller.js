// const events = require("../model/event");

// const getAllevent = async (req, res, next) => {
//     let events;
//     try{
//         events= await events.find();

//     }
//     catch(err){
//         console.log(err);
//     }
//     if(!events){
//         return res.status(404).json({message:"No events found"});
//     }
//     return res.status(200).json({events});
// };

// const getById = async (req, res, next) => {
//   const id = req.params.id;
//   let events;
//   try {
//     events = await events.findById(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!events) {
//     return res.status(404).json({ message: "No Event found" });
//   }
//   return res.status(200).json({ events });
// };

// const addevent = async (req, res, next) => {
//   const { name, club, description, date, available, image } = req.body;
//   let events;
//   try {
//     events = new events({
//       name,
//       club,
//       description,
//       date,
//       available,
//       image,
//     });
//     await events.save();
//   } catch (err) {
//     console.log(err);
//   }

//   if (!events) {
//     return res.status(500).json({ message: "Unable To Add" });
//   }
//   return res.status(201).json({ events });
// };

// const updateevent = async (req, res, next) => {
//   const id = req.params.id;
//   const { name, club, description, date, available, image } = req.body;
//   let events;
//   try {
//     events = await events.findByIdAndUpdate(id, {
//       name,
//       club,
//       description,
//       date,
//       available,
//       image,
//     });
//     events = await events.save();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!events) {
//     return res.status(404).json({ message: "Unable To Update By this ID" });
//   }
//   return res.status(200).json({ events });
// };

// const deleteevent = async (req, res, next) => {
//   const id = req.params.id;
//   let events;
//   try {
//     events = await events.findByIdAndRemove(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!events) {
//     return res.status(404).json({ message: "Unable To Delete By this ID" });
//   }
//   return res.status(200).json({ message: "Product Successfully Deleted" });
// };

// exports.getAllevent = getAllevent;
// exports.addevent = addevent;
// exports.getById = getById;
// exports.updateevent = updateevent;
// exports.deleteevent = deleteevent;


const Event = require("../model/event");

const getAllevent = async (req, res, next) => {
    try {
        const events = await Event.find();
        if (events.length === 0) {
            return res.status(404).json({ message: "No events found" });
        }
        return res.status(200).json({ events });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: "No Event found" });
        }
        return res.status(200).json({ event });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const addevent = async (req, res, next) => {
    const { name, club, description, date, available, image } = req.body;
    try {
        const newEvent = new Event({
            name,
            club,
            description,
            date,
            available,
            image,
        });
        await newEvent.save();
        return res.status(201).json({ event: newEvent });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateevent = async (req, res, next) => {
    const id = req.params.id;
    const { name, club, description, date, available, image } = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, {
            name,
            club,
            description,
            date,
            available,
            image,
        }, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Unable To Update By this ID" });
        }
        return res.status(200).json({ event: updatedEvent });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteevent = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedEvent = await Event.findByIdAndRemove(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Unable To Delete By this ID" });
        }
        return res.status(200).json({ message: "Event Successfully Deleted" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getAllevent,
    addevent,
    getById,
    updateevent,
    deleteevent
};
