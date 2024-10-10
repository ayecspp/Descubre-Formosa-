import { User } from "../models/models.js";
import { createJwt } from "../helpers/createJwt.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({message: "Este usuario ya existe"})
        }

        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name:name, password: hashedPassword , email:email });
        await newUser.save();
        res.json({ message: "Usuario registrado con exito"});
    } catch (error) {
        res.status(500).send("Error al registrar el usuario");
    }
}

export const login = async (req, res) => {
    const { email , password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user){
            return res.status(400).json({message: "Usuario no encontrado"});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword){
            return res.status(400).json({message: "Contraseña incorrecta"});
        }
        const token = createJwt(user._id);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesion" })
    }
}
