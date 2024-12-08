// Category
// 1 => Beauty Therapy Treatment
// 2 => Massage Therapy
// 3 => Package Deals
// 4 => Waxing

const services = [
    // Category 1 => Beauty Therapy Treatment
    {
        name: 'Eye treatment',
        description:
            'Includes a full face cleanse, tone & moisturize with eye area exfoliation, hyaluronic serum, collagen mask & eyecream with scalp massage.',
        duration: false,
        price: 55,
        category: 1,
        subs: null,
    },
    {
        name: 'Couples treatment',
        description:
            '2x 30 minute massages, while one body is being massaged the other has a relaxing wait in the vibrating massage chair with thier feet being soaked in the warm vibrating foot spa *there is a weight restriction for use of the massage chair.',
        duration: false,
        price: 140,
        category: 1,
        subs: null,
    },
    {
        name: 'Facials',
        description: 'Using natural & organic skincare tailored to every skin.',
        price: false,
        duration: true,
        category: 1,
        subs: [
            {
                description:
                    'Beautiful facial - double cleanse, exfoliant, mask, tone, moisturiser, eye cream, lip balm & serum.',
                price: 55,
            },
            {
                description: 'Tranquility facial- as above adding a decadent face, neck, shoulder & scalp massage.',
                price: 65,
            },
        ],
    },
    {
        name: 'Tinting',
        description: '',
        price: false,
        duration: true,
        category: 1,
        subs: [
            {
                description: 'Eyelash Only',
                price: 25,
            },
            {
                description: 'Eyebrow only',
                price: 15,
            },
            {
                description: 'Eye Trio (tints plus eyebrow shape)',
                price: 50,
            },
        ],
    },
    {
        name: 'Pedicure',
        description:
            'Relax in a vibrating massage chair while your feet are soaked, scrubbed & massaged. Includes cuticle care with nail shape & polish.',
        price: 65,
        category: 1,
        subs: null,
    },
    {
        name: 'Chakra balance & cleanse',
        description:
            'This is a holistic method of healing, creating alignment in your bodies energy centers.\n\nUsing a visualization exercise, sage, sound frequency & appropriate crystals to bring your mind, body & soul into a state of balance & harmony.\n\nThis technique clears stagnant & negative energies & emotional blockages, getting you back in tune with your body, restoring physical & mental health & improving overall well-being.',
        price: false,
        duration: true,
        category: 1,
        subs: [
            {
                description: 'Add on to another treatment',
                price: 25,
            },
            {
                description: 'As sole treatment',
                price: 45,
            },
        ],
    },
    // Category 2 => Massage Therapy
    {
        name: 'Relaxation or therapeutic',
        description:
            "Let Jo's 'magic hands' transport your mind, body & soul into a state of bliss & tranquility, reducing stress, pain & improving sleep quality.",
        price: false,
        duration: true,
        category: 2,
        subs: [
            {
                description: '35 Minutes',
                price: 45,
            },
            {
                description: '45 Minutes',
                price: 60,
            },
            {
                description: '60 Minutes',
                price: 80,
            },
        ],
    },
    {
        name: 'Hot stone',
        description: 'Relax & unwind while the magic of hot stones melt away aches & pains.',
        price: false,
        duration: true,
        category: 2,
        subs: [
            {
                description: '45 Minutes',
                price: 90,
            },
            {
                description: '65 Minutes',
                price: 130,
            },
        ],
    },
    {
        name: 'Indian head massage',
        description:
            'includes upper back, neck, shoulders, face & scalp. Great for reducing migraines or for those who prefer to stay clothed during treatment.',
        price: false,
        duration: true,
        category: 2,
        subs: [
            {
                description: '25 Minutes',
                price: 40,
            },
        ],
    },
    // Category 3 => Package Deals
    {
        name: 'Absolute Bliss',
        description: 'Includes a combination of relaxation massage & facial tailored to suit.',
        price: false,
        duration: true,
        category: 3,
        subs: [
            {
                description: '90 Minutes',
                price: 110,
            },
        ],
    },
    {
        name: 'Beauty package',
        description: 'Includes an eyelash tint, eyebrow shape & tint, Tranquilityfacial & pedicure.',
        price: false,
        duration: true,
        category: 3,
        subs: [
            {
                description: '120 Minutes',
                price: 165,
            },
        ],
    },
    {
        name: 'Heaven on Earth',
        description: 'Includes a full body relaxation massage, a Tranquilityfacial & a pedicure.',
        price: false,
        duration: true,
        category: 3,
        subs: [
            {
                description: '150 Minutes',
                price: 200,
            },
        ],
    },
    // Category 4 => Waxing
    {
        name: 'Facial Waxing',
        description: '',
        price: false,
        duration: true,
        category: 4,
        subs: [
            {
                description: 'Eyebrow shape',
                price: 20,
            },
            {
                description: 'Upper-Lip Only',
                price: 16,
            },
            {
                description: 'Chin Only',
                price: 16,
            },
            {
                description: 'Lip & Chin',
                price: 30,
            },
            {
                description: 'Add Hair Growth Inhibitor',
                price: 14,
            },
        ],
    },
    {
        name: 'Brazilian',
        description: '',
        price: false,
        duration: true,
        category: 4,
        subs: [
            {
                description: '1st time',
                price: 65,
            },
            {
                description: 'Maintenance (4-6 weeks)',
                price: 55,
            },
            {
                description: 'Bikini Line',
                price: 25,
            },
        ],
    },
    {
        name: 'Mens Waxing',
        description: '',
        price: false,
        duration: true,
        category: 4,
        subs: [
            {
                description: 'Eyebrow Shape',
                price: 20,
            },
            {
                description: 'Back or chest only',
                price: 40,
            },
            {
                description: 'Add Shoulders	',
                price: 10,
            },
            {
                description: 'Nose or Ear',
                price: 25,
            },
            {
                description: 'Nose & Ear',
                price: 40,
            },
        ],
    },
];

export default services;
