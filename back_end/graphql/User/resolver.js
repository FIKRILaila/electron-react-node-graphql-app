const { User } = require ('../../models/User')
const bcrypt = require ('bcrypt')
const jsonwebtoken = require ('jsonwebtoken')
require("dotenv").config()


const resolvers = {
  Query: {
    users: async (_, { }, { user }) => {
      if (typeof user == "string") throw new Error(user)
      return await User.find()
    }
  },
  Mutation: {
    register: async (_, { input }) => {
      const { username, email, password }= input
      try {
        await User.create({
            username,
            email,
            password: await bcrypt.hash(password, 10)
        })
        return true

      } catch (error) {
        throw new Error(error?.message)
      }

    },
    login: async (_, { input }) => {
      const { email, password } = input
      try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
          throw new Error('No user with that email')
        }
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
          throw new Error('Incorrect password')
        }
        // return jwt
        const token = jsonwebtoken.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: '1d' }
        )
        return {
          token, user
        }
      } catch (error) {
        throw new Error(error?.message)
      }
    }
  }
};

module.exports = resolvers;