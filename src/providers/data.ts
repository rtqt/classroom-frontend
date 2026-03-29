import {BaseRecord, DataProvider, GetListParams, GetListResponse} from '@refinedev/core';
import {mockSubjects} from '../constants/mock-data';

export type {Subject} from '../types';

export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>(
        { resource, filters = [], pagination = {} }: GetListParams
    ): Promise<GetListResponse<TData>> => {
        if (resource !== 'subjects') {
            return { data: [] as TData[], total: 0 };
        }

        // Apply filters (support LogicalFilter with field/operator/value)
        let filtered = mockSubjects.filter((subject) =>
            filters.every((filter) => {
                if (!('field' in filter)) return true;
                if (filter.field === 'department' && filter.operator === 'eq') {
                    return subject.department === filter.value;
                }
                return true;
            })
        );

        const total = filtered.length;

        // Apply pagination
        const page     = (pagination as { page?: number }).page     ?? 1;
        const pageSize = (pagination as { pageSize?: number }).pageSize ?? filtered.length;
        const offset   = (page - 1) * pageSize;
        const data     = filtered.slice(offset, offset + pageSize) as unknown as TData[];

        return { data, total };
    },
    getOne:    async () => { throw new Error('This function is not present in mock'); },
    create:    async () => { throw new Error('This function is not present in mock'); },
    update:    async () => { throw new Error('This function is not present in mock'); },
    deleteOne: async () => { throw new Error('This function is not present in mock'); },
    getApiUrl: () => '',
};
