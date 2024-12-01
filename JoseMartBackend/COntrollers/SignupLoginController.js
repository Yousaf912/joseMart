const User = require("../Schema/SignupLoginSchema");
const bcrypt = require("bcrypt")

const SignupLoginCOntroller = {
    signup: async (req, res) => {
        try {
            const findUser = await User.findOne({ mail: req.body.mail });
            if (findUser) {
                res.status(200).send({ message: 'User is Registed with this email' })
            } else {
                const newPassword = await bcrypt.hash(req.body.password, 10);
                const newobj = {
                    ...req.body,
                    password: newPassword
                }
                await User.create(newobj);
                res.status(200).send({ message: 'User created successfully' })
            }
        } catch (er) {
           res.send(er)
        }
    }
}

module.exports = SignupLoginCOntroller