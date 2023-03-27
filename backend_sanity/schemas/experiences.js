export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'num',
            title: 'Num',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string'
        },
        {
            name: 'works',
            title: 'Works',
            type: 'array',
            of: [{ type: 'workExperience' }]
        },
    ]
}