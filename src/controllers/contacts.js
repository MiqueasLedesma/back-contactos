import { contacts } from "../models/contacts.js";
import { Op } from "sequelize";

export const getContacts = async (req, res) => {
    if (req.query.name) {
        try {
            await contacts.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + req.query.name + '%'
                    }
                }
            }).then(r => res.send(r));
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        }
    } else {
        try {
            await contacts.findAll()
                .then(r => res.send(r));
        } catch (error) {
            console.log(error);
            res.status(400).send('failed!')
        };
    };
};

export const getContactByID = async (req, res) => {
    const { id } = req.params;
    try {
        await contacts.findByPk(id)
            .then(r => res.send(r));
    } catch (error) {
        console.log(error);
        res.status(400).send('failed!')
    };
};

export const deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        await contacts.destroy({
            where: {
                id: id
            }
        });
        res.send('contacts has been deleted!')
    } catch (error) {
        res.status(400).send('failed!')
    };
};

export const editContact = async (req, res) => {
    const { id } = req.params;
    const { name,
        number,
        notes,
        email,
        image
    } = req.body;
    try {
        await contacts.update({
            name,
            number,
            notes,
            email,
            image
        }, {
            where: {
                id
            }
        });
        res.send('contact has been updated!')
    } catch (error) {
        console.log(error);
        res.status(400).send('failed!')
    };
};

export const createNewContact = async (req, res) => {
    const { name,
        number,
        notes,
        email,
        image
    } = req.body;
    try {
        await contacts.create({
            name,
            number,
            notes,
            email,
            image
        })
        res.send('contact has been saved on db!')
    } catch (error) {
        console.log(error)
        res.status(400).send('failed!')
    }
};