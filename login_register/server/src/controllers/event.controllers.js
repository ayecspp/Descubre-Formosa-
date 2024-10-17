import { Event } from "../models/event.models"; 
import { createJwt } from "../helpers/createJwt.js";    
import bcrypt from "bcrypt";    

//crud

export const createEvent = async (req, res) => {
    const { title, description, location, image, date, time } = req.body;
    try {
        const newEvent = new Event({ title, description, location, image, date, time });
        await newEvent.save();
        res.json({ message: "Evento creado con exito" });
    } catch (error) {
        res.status(500).send("Error al crear el evento");
    }
};

export const findEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).send("Error al obtener los eventos");
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { title, description, location, image, date, time } = req.body;
    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        event.title = title;
        event.description = description;
        event.location = location;
        event.image = image;
        event.date = date;
        event.time = time;
        await event.save();
        res.json({ message: "Evento actualizado con exito" });
    } catch (error) {
        res.status(500).send("Error al actualizar el evento");
    }
};

export const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ message: "Evento no encontrado" });
        }
        res.json({ message: "Evento eliminado con exito" });
    } catch (error) {
        res.status(500).send("Error al eliminar el evento");
    }
};
