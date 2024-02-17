export type CreateTaskDTO = {
  userId: string;
  title: string;
  description: string;
  start_at: Date;
  end_at: Date;
  status: 'PENDENTE' | 'EM ANDAMENTO' | 'CONCLUÍDA';
  priority: 'BAIXA' | 'MÉDIA' | 'ALTA';
};

export type CreatedTaskDTO = {
  id: string;
};
