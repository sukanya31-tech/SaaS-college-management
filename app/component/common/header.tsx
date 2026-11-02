"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

type NotificationItem = {
  text: string;
  href: string;
};

type NavMenuItem = {
  label: string;
  href?: string;
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const router = useRouter();

  const notifications: NotificationItem[] = [
    { text: "🔔 Campus Placement Drive Starts March 5", href: "/placements" },
    { text: "🔔 Admissions Open 2026 – Apply Now", href: "/Academics/admissions" },
    { text: "🔔 Top Companies Hiring - Register Now!", href: "/placements/companies" },
    { text: "🔔 Pre-placement Training Starting Soon", href: "/training" },
    { text: "🔔 Interview Preparation Sessions Available", href: "/training/interview-prep" },
  ];

  const mobileAcademicItems: NavMenuItem[] = [
    { label: "Admissions", href: "/Academics/admissions" },
    { label: "Rules & Regulations", href: "/Academics/rules&regulations" },
    { label: "Academic Calendar", href: "/Academics/academic-calender" },
    { label: "MOM", href: "/Academics/minutes-of-meeting" },
    { label: "Code of Conduct", href: "/Academics/code-of-conduct" },
    { label: "Anti Ragging", href: "/Academics/anti-ragging" },
  ];

  const [index, setIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const keepDepartmentsOpenUntilItemClick = true;

  const displayMs = 2500; // time each item stays fully visible
  const transitionMs = 500; // slide transition duration
  const totalMs = displayMs + transitionMs;
  const len = notifications.length;

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, totalMs);
    return () => clearInterval(id);
  }, [totalMs]);

  // When we reach the duplicate (index === len) after sliding to it,
  // reset to 0 without transition so there's no visual jump.
  useEffect(() => {
    if (index === len) {
      const t = setTimeout(() => {
        setIsJumping(true);
        setIndex(0);
        // restore transitions on next tick
        setTimeout(() => setIsJumping(false), 50);
      }, transitionMs);
      return () => clearTimeout(t);
    }
  }, [index, len, transitionMs]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileSubMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full">
      {/* 🔵 TOP BAR */}
      <div className="bg-[var(--theme-color)] text-[var(--footer-text-color)] text-sm py-2">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex items-center gap-3 lg:gap-6">
          <div className="relative h-8 flex-1 min-w-0 overflow-hidden">
            <div
              ref={wrapperRef}
              style={{
                transform: `translateY(-${index * 2}rem)`,
                transition: isJumping ? "none" : `transform ${transitionMs}ms ease-in-out`,
              }}
            >
              {[...notifications, notifications[0]].map((note, i) => (
                <div
                  key={i}
                  onClick={() => router.push(note.href)}
                  className="h-8 flex items-center cursor-pointer hover:text-[var(--footer-text-color)] transition-colors text-sm sm:text-base"
                >
                  <span className="truncate block w-full pr-2">{note.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-5 shrink-0">
            {["R & D Cell", "Feedback", "Alumni", "Faculty"].map((item) => {
              const getPath = (label: string) => {
                switch (label) {
                  case "R & D Cell":
                    return "/research";
                  case "Feedback":
                    return "/feedback";
                  case "Alumni":
                    return "/alumni";
                  case "Faculty":
                    return "/faculty";
                  default:
                    return "/";
                }
              };

              return (
                <button
                  key={item}
                  onClick={() => router.push(getPath(item))}
                  className="font-semibold text-base cursor-pointer bg-transparent border-0 p-2"
                >
                  {item}
                </button>
              );
            })}

            {/* Desktop Login */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("login")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-2 bg-[var(--theme-color2)] text-[var(--footer-text-color)] px-4 py-1.5 rounded-full text-sm hover:bg-[var(--theme-color2)] transition">
                Login
                <ChevronDown size={14} className={`${activeMenu === "login" ? "rotate-180" : ""}`} />
              </button>

              {activeMenu === "login" && (
                <div className="absolute right-0 top-9 w-44 bg-[var(--background)] text-[var(--theme-color)] shadow-lg rounded-md py-2 z-50">
                  <p onClick={() => router.push("/student-login")} className="px-4 py-2 cursor-pointer">
                    Student Login
                  </p>
                  <p onClick={() => router.push("/faculty-login")} className="px-4 py-2  cursor-pointer">
                    Faculty Login
                  </p>
                  <p onClick={() => router.push("/parent-login")} className="px-4 py-2  cursor-pointer">
                    Parent Login
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🧭 MAIN NAVBAR */}
      <div className={`w-full bg-[var(--background)] transition-all duration-300 ${isSticky ? "fixed top-0 left-0 shadow-lg z-50" : "relative"}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-3 sm:py-4 flex justify-between items-center gap-3">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
            <Image
              src="/logos/digit-college-logo.png"
              alt="College Logo"
              width={170}
              height={56}
              className="h-auto w-[130px] sm:w-[150px] md:w-[165px] lg:w-[180px]"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 text-[var(--footer-bg)] font-semibold text-[17px]">
              <NavItem
                title="About Us"
                items={[
                  { label: "About College", href: "/about/about-college" },
                  { label: "Management", href: "/about/college-management" },
                ]}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                keepOpenUntilItemClick
              />
              <NavItem
                title="Academics"
                items={[
                  { label: "Admissions", href: "/Academics/admissions" },
                  { label: "Rules & Regulations", href: "/Academics/rules&regulations" },
                  { label: "Academic Calendar", href: "/Academics/academic-calender" },
                  { label: "Minutes of Meetings", href: "/Academics/minutes-of-meeting" },
                  { label: "Code of Conduct", href: "/Academics/code-of-conduct" },
                  { label: "Anti Ragging", href: "/Academics/anti-ragging" },
                ]}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                keepOpenUntilItemClick
                dropdownWidthClass="w-56"
              />

              <li
                className="relative"
                onMouseEnter={() => setActiveMenu("departments")}
                onMouseLeave={() => {
                  if (!keepDepartmentsOpenUntilItemClick) {
                    setActiveMenu(null);
                  }
                }}
              >
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    if (keepDepartmentsOpenUntilItemClick) {
                      setActiveMenu(activeMenu === "departments" ? null : "departments");
                    }
                  }}
                >
                  Departments
                  <ChevronDown size={18} className={`${activeMenu === "departments" ? "rotate-180" : ""}`} />
                </div>

                {activeMenu === "departments" && (
                  <div className="absolute left-1/2 top-11 w-[820px] -translate-x-1/2 bg-[var(--background)] text-[var(--footer-bg)] shadow-xl rounded-xl p-16 z-50">
                    <div className="grid grid-cols-2 gap-16 text-base">
                      <div>
                        <h3
                          className="text-lg font-semibold mb-5 border-b pb-2 transition-colors"
                        >
                          Computer Science & Engineering
                        </h3>
                        <ul className="space-y-3">
                          <li className="cursor-pointer hover:text-[var(--theme-color)]" onClick={() => {
                            router.push("/departments/artificialintellegence");
                            setActiveMenu(null);
                          }}>Artificial Intelligence & Machine Learning</li>
                          <li className="cursor-pointer hover:text-[var(--theme-color)]" onClick={() => {
                            router.push("/departments/datascience");
                            setActiveMenu(null);
                          }}>Data Science</li>
                          <li className="cursor-pointer hover:text-[var(--theme-color)]" onClick={() => {
                            router.push("/departments/cybersecurity");
                            setActiveMenu(null);
                          }}>Cyber Security</li>
                          <li className="cursor-pointer hover:text-[var(--theme-color)]" onClick={() => {
                            router.push("/departments/internet-of-things");
                            setActiveMenu(null);
                          }}>Internet of Things</li>
                        </ul>
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold mb-5 border-b pb-2 transition-colors"
                        >
                          Core Engineering
                        </h3>
                          <ul className="space-y-3">
                            <li
                              className="cursor-pointer hover:text-[var(--theme-color)]"
                              onClick={() => {
                                router.push("/departments/informationtechnology");
                                setActiveMenu(null);
                              }}
                            >
                              Information Technology
                            </li>
                            <li
                              className="cursor-pointer hover:text-[var(--theme-color)]"
                              onClick={() => {
                                router.push("/departments/electroniccommunication");
                                setActiveMenu(null);
                              }}
                            >
                              Electronics & Communication Engineering
                            </li>
                            <li
                              className="cursor-pointer hover:text-[var(--theme-color)]"
                              onClick={() => {
                                router.push("/departments/electricelectronic");
                                setActiveMenu(null);
                              }}
                            >
                              Electrical & Electronics Engineering
                            </li>
                            <li
                              className="cursor-pointer hover:text-[var(--theme-color)]"
                              onClick={() => {
                                router.push("/departments/civil");
                                setActiveMenu(null);
                              }}
                            >
                              Civil Engineering
                            </li>
                            <li
                              className="cursor-pointer hover:text-[var(--theme-color)]"
                              onClick={() => {
                                router.push("/departments/mechanical");
                                setActiveMenu(null);
                              }}
                            >
                              Mechanical Engineering
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="cursor-pointer" onClick={() => router.push("/placements")}>Placements</li>
              <li className="cursor-pointer" onClick={() => router.push("/examinationcell")}>Examination Cell</li>
              <NavItem
                title="Facilities"
                items={[
                  { label: "Library", href: "/Facilities/library" },
                  { label: "Hostel", href: "/Facilities/hostel" },
                  { label: "Sports", href: "/Facilities/sports" },
                  { label: "Cafeteria", href: "/Facilities/cafeteria" },
                  { label: "Transport", href: "/Facilities/transport" },
                ]}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                keepOpenUntilItemClick
              />
              <li className="cursor-pointer" onClick={() => router.push("/contact")}>Contact</li>
            </ul>
          </nav>

          {/* Mobile Login + Menu */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <div className="relative">
              <button
                onClick={() => setActiveMenu(activeMenu === "login" ? null : "login")}
                className="flex items-center gap-1.5 sm:gap-2 bg-[var(--theme-color2)] text-[var(--background)] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm"
              >
                Login
                <ChevronDown size={14} className={`${activeMenu === "login" ? "rotate-180" : ""}`} />
              </button>

              {activeMenu === "login" && (
                <div className="absolute right-0 top-12 w-44 bg-[var(--background)] text-[var(--footer-bg)] shadow-lg rounded-md py-2 z-50">
                  <p onClick={() => {
                    router.push("/student-login");
                    setMobileOpen(false);
                  }} className="px-4 py-2 cursor-pointer">
                    Student Login
                  </p>
                  <p onClick={() => {
                    router.push("/faculty-login");
                    setMobileOpen(false);
                  }} className="px-4 py-2 cursor-pointer">
                    Faculty Login
                  </p>
                  <p onClick={() => {
                    router.push("/parent-login");
                    setMobileOpen(false);
                  }} className="px-4 py-2 cursor-pointer">
                    Parent Login
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="p-1.5 sm:p-2 rounded-md"
              aria-label="Open mobile menu"
            >
              <Menu size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[var(--theme-color)]/70"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-[88%] sm:w-[72%] md:w-[58%] max-w-md bg-[var(--background)] p-5 sm:p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={() => setMobileOpen(false)} aria-label="Close mobile menu">
                <X size={22} />
              </button>
            </div>

            {["About Us", "Academics", "Facilities", "Login"].map((item) => (
              <div key={item}>
                <button
                  onClick={() => setMobileSubMenu(mobileSubMenu === item ? null : item)}
                  className="w-full flex justify-between items-center py-3 font-medium"
                >
                  {item}
                  <ChevronDown className={`${mobileSubMenu === item ? "rotate-180" : ""}`} />
                </button>

                {mobileSubMenu === item && (
                  <div className="pl-4 space-y-2 text-sm text-[var(--footer-bg)]">
                    {item === "About Us" && (
                      <>
                        <p className="cursor-pointer" onClick={() => {
                          router.push("/about/about-college");
                          setMobileOpen(false);
                        }}>About College</p>
                        <p className="cursor-pointer" onClick={() => {
                          router.push("/about/college-management");
                          setMobileOpen(false);
                        }}>Management</p>
                      </>
                    )}
                    {item === "Academics" &&
                      mobileAcademicItems.map((academicItem) => (
                        <p
                          key={academicItem.label}
                          className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                          onClick={() => {
                            if (academicItem.href) {
                              router.push(academicItem.href);
                              setMobileOpen(false);
                              setMobileSubMenu(null);
                            }
                          }}
                        >
                          {academicItem.label}
                        </p>
                      ))}
                    {item === "Facilities" &&
                      [
                        { label: "Library", href: "/Facilities/library" },
                        { label: "Hostel", href: "/Facilities/hostel" },
                        { label: "Sports", href: "/Facilities/sports" },
                        { label: "Cafeteria", href: "/Facilities/cafeteria" },
                        { label: "Transport", href: "/Facilities/transport" },
                      ].map((facilityItem) => (
                        <p
                          key={facilityItem.label}
                          className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                          onClick={() => {
                            router.push(facilityItem.href);
                            setMobileOpen(false);
                            setMobileSubMenu(null);
                          }}
                        >
                          {facilityItem.label}
                        </p>
                      ))}
                    {item === "Login" && ["Faculty Login", "Parent Login", "Student Login"].map((i) => <p key={i}>{i}</p>)}
                  </div>
                )}
              </div>
            ))}

            <div>
              <button
                onClick={() => setMobileSubMenu(mobileSubMenu === "Departments" ? null : "Departments")}
                className="w-full flex justify-between items-center py-3 font-medium"
              >
                Departments
                <ChevronDown className={`${mobileSubMenu === "Departments" ? "rotate-180" : ""}`} />
              </button>

              {mobileSubMenu === "Departments" && (
                  <div className="pl-4 space-y-2 text-sm text-[var(--body-text-color)] pb-3">
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push("/departments/artificialintellegence");
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Artificial Intelligence & ML
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push("/departments/datascience");
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Data Science
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push("/departments/cybersecurity");
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Cyber Security
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push("/departments/internet-of-things");
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Internet of Things
                    </p>
                    <p className="pt-2 font-semibold">Core Engineering</p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push('/departments/informationtechnology');
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Information Technology
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push('/departments/electroniccommunication');
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Electronics & Communication
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push('/departments/electricelectronic');
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Electrical & Electronics
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push('/departments/civil');
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Civil Engineering
                    </p>
                    <p
                      className="cursor-pointer rounded-md px-2 py-1 hover:bg-[var(--theme-bg-light)] transition-colors"
                      onClick={() => {
                        router.push('/departments/mechanical');
                        setMobileOpen(false);
                        setMobileSubMenu(null);
                      }}
                    >
                      Mechanical Engineering
                    </p>
                  </div>

              )}
            </div>

            {['Placements', 'Examination Cell', 'R & D Cell', 'Feedback', 'Alumni', 'Faculty', 'Contact'].map((item) => (
              <p
                key={item}
                className="py-3 font-medium text-[var(--footer-bg)] cursor-pointer"
                onClick={() => {
                  if (item === 'Placements') router.push('/placements');
                  else if (item === 'Examination Cell') router.push('/examinationcell');
                  else if (item === 'R & D Cell') router.push('/research');
                  else if (item === 'Feedback') router.push('/feedback');
                  else if (item === 'Alumni') router.push('/alumni');
                  else if (item === 'Faculty') router.push('/faculty');
                  else if (item === 'Contact') router.push('/contact');

                  setMobileOpen(false);
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

type NavItemProps = {
  title: string;
  items: NavMenuItem[];
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  dropdownWidthClass?: string;
  keepOpenUntilItemClick?: boolean;
};

function NavItem({ title, items, activeMenu, setActiveMenu, dropdownWidthClass = "w-44", keepOpenUntilItemClick = false }: NavItemProps) {
  const router = useRouter();

  return (
    <li
      className="relative"
      onMouseEnter={() => setActiveMenu(title)}
      onMouseLeave={() => {
        if (!keepOpenUntilItemClick) {
          setActiveMenu(null);
        }
      }}
    >
      <div
        className="flex items-center gap-2 cursor-pointer hover:text-[var(--footer-bg)]"
        onClick={() => {
          if (keepOpenUntilItemClick) {
            setActiveMenu(activeMenu === title ? null : title);
          }
        }}
      >
        {title}
        <ChevronDown size={18} className={`${activeMenu === title ? "rotate-180" : ""}`} />
      </div>

      {activeMenu === title && (
        <div className={`absolute left-0 top-11 ${dropdownWidthClass} bg-[var(--background)] text-[var(--footer-bg)] shadow-lg rounded-md py-2.5 z-50`}>
          {items.map((item) => (
            <p
              key={item.label}
              onClick={() => {
                if (item.href) {
                  router.push(item.href);
                  setActiveMenu(null);
                }
              }}
              className="px-5 py-2.5 cursor-pointer text-base hover:bg-[var(--theme-bg-light)] transition-colors"
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </li>
  );
}