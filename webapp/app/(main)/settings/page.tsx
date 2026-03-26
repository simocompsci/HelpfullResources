import { User, Bell, Palette, Shield, LogOut } from "lucide-react";

export default function SettingsPage() {
  const sections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Profile Information", desc: "Update your name and email address" },
        { icon: Shield, label: "Security", desc: "Password and authentication" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: Palette, label: "Appearance", desc: "Theme, colors, and layout" },
        { icon: Bell, label: "Notifications", desc: "Email and push alerts" },
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences.</p>
      </header>

      {/* Profile Summary */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          S
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground">Simone</h2>
          <p className="text-muted-foreground">simone@example.com</p>
        </div>
        <button className="bg-secondary hover:bg-secondary/80 text-foreground font-medium px-5 py-2.5 rounded-xl transition-colors">
          Edit Profile
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-8">
        {sections.map(section => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-lg font-semibold px-2 text-foreground">{section.title}</h3>
            <div className="glass-panel overflow-hidden">
              {section.items.map((item, index) => (
                <div 
                  key={item.label} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-secondary/50 transition-colors cursor-pointer group gap-4 ${
                    index !== section.items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-10 h-10 items-center justify-center text-muted-foreground">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 pb-8">
        <button className="flex items-center justify-center sm:justify-start w-full sm:w-auto gap-2 text-destructive font-medium px-4 py-2.5 hover:bg-destructive/10 rounded-xl transition-colors">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
}
