import OnlineStore1 from '../../assets/images/onlinestore1.png'
import OnlineStore2 from '../../assets/images/onlinestore2.png'
import OnlineStore3 from '../../assets/images/onlinestore3.png'
import OnlineStore4 from '../../assets/images/onlinestore4.png'
import OnlineStore5 from '../../assets/images/onlinestore5.png'
import OnlineStore6 from '../../assets/images/onlinestore6.png'
import Portfolio6 from '../../assets/images/Portfolio6.png'
import Blog1 from '../../assets/images/blog1.png'
import Blog2 from '../../assets/images/blog2.png'
import Blog3 from '../../assets/images/blog3.png'
import Educational4 from '../../assets/images/educational4.png'
import Services1 from '../../assets/images/services1.png'
import Services2 from '../../assets/images/services2.png'
import Services3 from '../../assets/images/services3.png'
import Food2 from '../../assets/images/food2.png'
import Technology1 from '../../assets/images/technology1.png'
import Technology2 from '../../assets/images/technology2.png'
import Technology3 from '../../assets/images/technology3.png'
import Healthcare1 from '../../assets/images/health1.png'
import Healthcare2 from '../../assets/images/health2.png'
import Fashion1 from '../../assets/images/fashion1.png'
import Entertainment1 from '../../assets/images/entertainment1.png'
import Entertainment2 from '../../assets/images/entertainment2.png'
import Entertainment3 from '../../assets/images/entertainment3.png'
import Entertainment4 from '../../assets/images/entertainment4.png'
import Travel1 from '../../assets/images/Travel1.png'
import Legal1 from '../../assets/images/Legal1.png'


const imageData = {
    'Educational': [
      { src: Educational4, text: 'School Website', edit: '/SoairEditHome', preview: '/SoairHome' },
      // Add more Educational images
    ],
    'Restaurant': [
      { src: Food2, text: 'Restaurant', edit: '/LawrenceEditHome', preview: '/LawrenceHome' },
      // Add more restaurant images
    ],
    'Fashion': [
      { src: Fashion1, text: 'Clothing Store', edit: '/DayDreamEditHome', preview: '/DayDreamHome' },
      // Add more Fashion images
    ],
    'Portfolio': [
      { src: Portfolio6, text: 'Business CV', edit: '/MayaNelsonEditHome', preview: '/MayaNelsonHome' },
      // Add more Portfolio images
    ],
    'Travel and Tour': [
      { src: Travel1, text: 'Travel and Tours', edit: '/travelbetteredithome', preview: '/travelbetterhome' },
    ],
    'Entertainment': [
      { src: Entertainment1, text: 'Event Planning Company', preview: '/qproductionHome' },
      { src: Entertainment2, text: 'Club' },
      { src: Entertainment3, text: 'DJ' },
      { src: Entertainment4, text: 'Event Venue' },
      // Add more Entertainment images
    ],
    'Online Store': [
      { src: OnlineStore1, text: 'Accessories Store' },
      { src: OnlineStore2, text: 'Electronics Store' },
      { src: OnlineStore3, text: 'Stationery Store' },
      { src: OnlineStore4, text: 'T- Shirt Store' },
      { src: OnlineStore5, text: 'Beauty Shop' },
      { src: OnlineStore6, text: 'Supermarket' },
      // Add more online store images
    ],
    'Blog': [
      { src: Blog1, text: 'Personal Blog' },
      { src: Blog2, text: 'Travel Blog' },
      { src: Blog3, text: 'Personal Blog' },
      // Add more Blog images
    ],
    'Service Business': [
      { src: Services1, text: 'Cleaning Company' },
      { src: Services2, text: 'Home Improvement Company' },
      { src: Services3, text: 'Recycling Facility' },
      // Add more restaurant images
    ],
    'IT & Technology': [
      { src: Technology1, text: 'AI Company' },
      { src: Technology2, text: 'Tech Company' },
      { src: Technology3, text: 'IT Services Company' },
      // Add more IT & Technology images
    ],
    'HealthCare': [
      { src: Healthcare1, text: 'Home Healthcare Company' },
      { src: Healthcare2, text: 'Medical Clinic' },
      // Add more HealthCare images
    ],
    '': [
      { src: Legal1, text: 'Law Firm', preview: '/knollwaterHome' }
    ]
  };

  export default imageData;