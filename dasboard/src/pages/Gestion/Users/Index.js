import React from 'react';
import Layout from '../../Layout'
import CardHeader from '../../../components/Tables/CardHeader';
import TableContainer from '../../../components/Tables/TableContainer';
import Wraptable from '../../../components/Tables/WrapTable';
import TableHeader from '../../../components/Tables/TableHeader';
import Tablebody from '../../../components/Tables/TableBody';

const UsersComponent = () => {

    const columns = [
        {
            columnName: 'Nombre',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7'
        },
        {
            columnName: 'Usuario',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'
        },
        {
            columnName: 'Departamento',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2'
        },
        {
            columnName: 'Email',
            customClass: 'text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2'
        },
        {
            columnName: '',
            customClass: ''
        },


    ]



    return (
        <Layout>
            <Wraptable>
                <CardHeader nameTable={'DGDevelopers > Table > Users'} />
                <TableContainer>
                    <TableHeader columns={columns} />
                    <Tablebody />
                </TableContainer>
            </Wraptable>
        </Layout>
    );
}

export default UsersComponent;
