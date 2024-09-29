import { Request, Response } from 'express';
import User from '../schemas/User';

class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        
        try {
            const users = await User.find();

            return res.json(users);
        }  catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }
}

export default new UserController();