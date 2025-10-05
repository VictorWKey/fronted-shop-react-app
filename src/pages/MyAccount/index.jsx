import Layout from '../../Components/Layout';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { usePageTitle, usePageMeta } from '../../hooks/usePageTitle';

function MyAccount() {
  // Set page title and meta
  usePageTitle('My Account');
  usePageMeta(
    'Manage your account settings, personal information, and preferences. Update your profile and account details.',
    'my account, profile settings, account management, personal information'
  );

  return (
    <Layout>
      <div className='w-full max-w-2xl mx-auto'>
        <h1 className='font-medium text-xl sm:text-2xl lg:text-3xl mb-6 text-center sm:text-left'>
          My Account
        </h1>
        
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden'>
          <div className='p-6 border-b border-gray-100'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <div className='w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center'>
                <UserIcon className='w-10 h-10 text-gray-500' />
              </div>
              <div className='text-center sm:text-left'>
                <h2 className='text-xl font-semibold mb-1'>Victor W. Key</h2>
                <p className='text-gray-600'>Premium Member</p>
              </div>
            </div>
          </div>
          
          <div className='p-6 space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <h3 className='font-medium text-lg mb-4'>Contact Information</h3>
                
                <div className='flex items-center gap-3'>
                  <EnvelopeIcon className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-600'>Email</p>
                    <p className='font-medium'>victorwkey@gmail.com</p>
                  </div>
                </div>
                
                <div className='flex items-center gap-3'>
                  <PhoneIcon className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-600'>Phone</p>
                    <p className='font-medium'>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className='flex items-center gap-3'>
                  <MapPinIcon className='w-5 h-5 text-gray-500' />
                  <div>
                    <p className='text-sm text-gray-600'>Address</p>
                    <p className='font-medium'>123 Main St, City, State 12345</p>
                  </div>
                </div>
              </div>
              
              <div className='space-y-4'>
                <h3 className='font-medium text-lg mb-4'>Account Settings</h3>
                
                <button className='w-full sm:w-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200'>
                  Edit Profile
                </button>
                
                <button className='w-full sm:w-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 sm:ml-2'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyAccount