interface Extracted {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    date: string;
    status: string
}

const extractedData: Extracted[] = [
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Inactive'
    },
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Pending'
    },
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Blacklisted'
    },
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Inactive'
    },
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Pending'
    },
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Active'
    },
    {
        organization: 'lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phoneNumber: '08078903721',
        date: 'May 15, 2020 10:00 AM',
        status: 'Blacklisted'
    }
]

const organization = [ 'Select', 'lendsqr', 'nokia', 'jku', 'gtyh']

const status = ['Select', 'Active', 'Inactive', 'Pending', 'Blacklist']

export {extractedData, organization, status }