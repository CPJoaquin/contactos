<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="filtro">
            Filtro: <input type="search" v-model="search">
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>CORREO</th>
                    <th>DIRECCIÓN</th>
                    <th>TELEFONO</th>
                    <th>PAIS</th>
                    <th>CIUDAD</th>
                    <th></th>
                </tr>
                <tr>
                    <th><input type="text" v-model="contactNew.id"></th>
                    <th><input type="text" v-model="contactNew.name"></th>
                    <th><input type="text" v-model="contactNew.email"></th>
                    <th><input type="text" v-model="contactNew.address"></th>
                    <th><input type="text" v-model="contactNew.phone"></th>
                    <th><input type="text" v-model="contactNew.country"></th>
                    <th><input type="text" v-model="contactNew.city"></th>
                    <th><button @click="save()">Nuevo</button></th>
                </tr>
                <tr v-if="indexEdit !== null">
                    <th><input type="text" v-model="contacEdit.id"></th>
                    <th><input type="text" v-model="contacEdit.name"></th>
                    <th><input type="text" v-model="contacEdit.email"></th>
                    <th><input type="text" v-model="contacEdit.address"></th>
                    <th><input type="text" v-model="contacEdit.phone"></th>
                    <th><input type="text" v-model="contacEdit.country"></th>
                    <th><input type="text" v-model="contacEdit.city"></th>
                    <th><button @click="update()">Guardar</button></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(contact, index) in contactList" :key="contact.id">
                    <td>{{contact.id}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.email}}</td>
                    <td>{{contact.address}}</td>
                    <td>{{contact.phone}}</td>
                    <td>{{contact.country}}</td>
                    <td>{{contact.city}}</td>
                    <td>
                        <button @click="remove(index)">Eliminar</button>
                        <button @click="edit(contact, index)">Editar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data() {
        return {
            title: 'Libreta de contactos',
            search: '',
            contactNew: { 
                id: "",
                name: "",
                email: "",
                address: "",
                phone: "",
                country: "",
                city: ""
            },
            contacEdit: { 
                id: "",
                name: "",
                email: "",
                address: "",
                phone: "",
                country: "",
                city: ""
            },  
            indexEdit:null, 
            contacts: [
                {
                    id: 1,
                    name: "Alice Johnson",
                    email: "alice.johnson@example.com",
                    address: "123 Maple Street",
                    phone: "123-456-7890",
                    country: "USA",
                    city: "New York"
                    },
                {
                    id: 2,
                    name: "Bob Smith",
                    email: "bob.smith@example.com",
                    address: "456 Oak Avenue",
                    phone: "987-654-3210",
                    country: "Canada",
                    city: "Toronto"
                    },
                {
                    id: 3,
                    name: "Carol White",
                    email: "carol.white@example.com",
                    address: "789 Pine Road",
                    phone: "555-123-4567",
                    country: "UK",
                    city: "London"
                    },
                {
                    id: 4,
                    name: "David Brown",
                    email: "david.brown@example.com",
                    address: "321 Elm Street",
                    phone: "444-555-6666",
                    country: "Australia",
                    city: "Sydney"
                    },
                {
                    id: 5,
                    name: "Emily Davis",
                    email: "emily.davis@example.com",
                    address: "654 Spruce Lane",
                    phone: "333-444-5555",
                    country: "USA",
                    city: "Los Angeles"
                    }
            ]
        }
    },
    components: {
        // Registro de componentes que se utilizaran.
    },
    methods: {
        // métodos que se pueden llamar desde la plantilla o desde otras partes del componente.
        save(){
            this.contacts.push(Object.assign({}, this.contactNew));
        },
        remove(index){
            this.contacts.splice(index,1);
        },
        update(){
            this.contacts[this.indexEdit] = Object.assign({},this.contacEdit);
            this.indexEdit = null;
        },
        edit(contact, index){            
            this.indexEdit = index;
            this.contacEdit = Object.assign({},contact);
        }
    },
    computed: {
        // propiedades computadas que dependen de otras propiedades reactivas
        contactList(){
            return this.contacts.filter(item => item.id==this.search||item.name.toLowerCase().includes(this.search.toLowerCase())||item.email.toLowerCase().includes(this.search.toLowerCase()));
        } 
    },
    props: {
        // propiedades que el componente puede recibir.
    },
    emits: [] // los eventos personalizados que el componente puede emitir.
}
</script >

<style scope>
h1 {
    color: #42b983;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
    text-align: left;
}
</style>