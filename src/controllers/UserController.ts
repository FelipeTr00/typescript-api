import { Request, Response } from 'express';
import User from '../schemas/User';

class UserController {
    
    // Users + FullName
    public async index(req: Request, res: Response): Promise<Response> {
        
        try {
            const users = await User.find()

            const usersWithFullName = users.map(user => {
                const userObject = user.toObject()
                return {
                    ...userObject,
                    fullName: user.fullName()
                };
            });

            return res.json(usersWithFullName)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' })
        }
    }

    // Inserir usuários no MongoDB
    public async store (req: Request, res: Response): Promise<Response> {
        try {
            const user = await User.create(req.body)
            const userObject = user.toObject()
            return res.json({
                ...userObject,
                fullName: user.fullName() 
            })

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao inserir usuário' })
        }
    }
}

export default new UserController();
