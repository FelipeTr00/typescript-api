import { Request, Response } from 'express';
import User from '../schemas/User';

class UserController {
    
    // Buscar usuários no MongoDB
    public async index(req: Request, res: Response): Promise<Response> {
        
        try {
            const users = await User.find();

            return res.json(users);
        }  catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    // Inserir usuários no MOngoDB
    public async store (req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)

        return res.json(user)
    }
}

export default new UserController();