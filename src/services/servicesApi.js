import api from './api'


const getAll = async () => {
  const { data } = await api.get(`senhasGerada`);
  return data;
}

const getById = async (id) => {
  const { data } = await api.get(`senhasGerada/${id}`);
  return data;
}

const create = async (dataToCreate) => {
  const { data } = await api.post(`senhasGerada`, dataToCreate);
  return data;
}

const updateById = async (id, dataToUpdate) => {
  const { data } = await api.put(`senhasGerada/${id}`, dataToUpdate);
  return data;
}

const deleteById = async (id) => {
  await api.delete(`senhasGerada/${id}`);
  return undefined;
}

export const ApiServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};