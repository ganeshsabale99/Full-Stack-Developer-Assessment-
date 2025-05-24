import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue
  } = useForm();
  
  
  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('email', user.email);
    }
  }, [user, setValue]);
  
  const onSubmit = async (data) => {
    setLoading(true);
    
    
    setTimeout(() => {
      toast.success('Profile updated successfully!');
      setLoading(false);
    }, 1000);
  };
  
  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
      
      <div className="card">
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                id="name"
                type="text"
                className={`input ${errors.name ? 'border-danger-500' : ''}`}
                {...register('name', { 
                  required: 'Name is required',
                  maxLength: {
                    value: 50,
                    message: 'Name is too long'
                  }
                })}
              />
              {errors.name && <p className="form-error">{errors.name.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                className={`input ${errors.email ? 'border-danger-500' : ''}`}
                readOnly
                {...register('email')}
              />
              <p className="mt-1 text-xs text-gray-500">Email address cannot be changed</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="role" className="form-label">Role</label>
              <input
                id="role"
                type="text"
                className="input bg-gray-50"
                value={user.role === 'admin' ? 'Administrator' : 'Standard User'}
                readOnly
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="joined" className="form-label">Member Since</label>
              <input
                id="joined"
                type="text"
                className="input bg-gray-50"
                value={new Date(user.createdAt || Date.now()).toLocaleDateString()}
                readOnly
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="mt-8 card">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          <p className="text-gray-600 mb-4">
            Password changes are temporarily disabled during this demonstration.
          </p>
          <button
            type="button"
            className="btn btn-outline"
            disabled
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;