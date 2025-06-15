import { useState } from "react";
import { BookOpen, Star, Clock, Settings, User, Bookmark, History } from "lucide-react";

const MyFrofile = () => {
    const [activeTab, setActiveTab] = useState('reading-history');

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
                            <img 
                                src="https://i.pinimg.com/736x/33/0b/7c/330b7cc61d6d8e52fb6fd28ac3ab75dd.jpg" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-gray-900">User Name</h1>
                            <p className="text-gray-500">Member since March 2024</p>
                            <div className="flex gap-4 mt-4">
                                <div className="text-center">
                                    <p className="text-2xl font-semibold text-gray-900">12</p>
                                    <p className="text-sm text-gray-500">Reading</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-semibold text-gray-900">45</p>
                                    <p className="text-sm text-gray-500">Completed</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-semibold text-gray-900">89</p>
                                    <p className="text-sm text-gray-500">Bookmarks</p>
                                </div>
                            </div>
                        </div>
                        <button className="hover:cursor-pointer bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-lg shadow-sm mb-6">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('reading-history')}
                            className={`hover:cursor-pointer px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                                activeTab === 'reading-history' 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <History className="w-5 h-5" />
                            Reading History
                        </button>
                        <button
                            onClick={() => setActiveTab('bookmarks')}
                            className={`hover:cursor-pointer px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                                activeTab === 'bookmarks' 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <Bookmark className="w-5 h-5" />
                            Bookmarks
                        </button>
                        <button
                            onClick={() => setActiveTab('settings')}
                            className={`hover:cursor-pointer px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                                activeTab === 'settings' 
                                ? 'text-blue-600 border-b-2 border-blue-600' 
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <Settings className="w-5 h-5" />
                            Settings
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {activeTab === 'reading-history' && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Reading History</h2>
                            {/* Reading History Items */}
                            <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                        src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg" 
                                        alt="Novel Cover" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">Novel Title</h3>
                                    <p className="text-sm text-gray-500">Chapter 15: The Beginning</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>2 hours ago</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="w-4 h-4" />
                                            <span>15/156 chapters</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* More reading history items... */}
                        </div>
                    )}

                    {activeTab === 'bookmarks' && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Bookmarks</h2>
                            {/* Bookmark Items */}
                            <div className="flex gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                        src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg" 
                                        alt="Novel Cover" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">Bookmarked Novel</h3>
                                    <p className="text-sm text-gray-500">Last read: Chapter 10</p>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4" />
                                            <span>4.5/5</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="w-4 h-4" />
                                            <span>156 chapters</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* More bookmark items... */}
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                            
                            {/* Profile Settings */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            defaultValue="User Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            defaultValue="user@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Reading Preferences */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-900">Reading Preferences</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="darkMode" className="rounded text-blue-600" />
                                        <label htmlFor="darkMode" className="text-sm text-gray-700">Dark Mode</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" id="notifications" className="rounded text-blue-600" />
                                        <label htmlFor="notifications" className="text-sm text-gray-700">Enable Notifications</label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="hover:cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyFrofile; 