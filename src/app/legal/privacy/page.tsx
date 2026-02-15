import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  FileText,
  Settings,
  Mail,
  MessageCircle,
  Globe,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-gray-400 text-lg">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-zinc-950/80 to-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="space-y-12">
            <section className="group">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Orvex Services (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our services, including our products, platforms, and
                  ventures. This includes web applications, mobile apps,
                  enterprise systems, and other technology solutions we develop.
                  By using our services, you agree to the collection and use of
                  information in accordance with this policy.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-blue-500/20">
                  <Eye size={20} className="text-blue-400" />
                </div>
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    1.1 Personal Information
                  </h3>
                  <p className="mb-3">
                    When you engage with Orvex Services for development
                    services, we may collect:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Name, email address, phone number, and company
                        information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Billing and payment information (processed securely
                        through third-party processors)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Project requirements, specifications, and technical
                        documentation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Communication records, including emails, messages, and
                        support tickets
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="mb-3">
                    When you visit our website or use our services, we
                    automatically collect:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        IP address, browser type, operating system, and device
                        information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Usage data, including pages visited, time spent, and
                        click patterns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Log files, error reports, and performance metrics
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    1.3 Client Project Data
                  </h3>
                  <p>
                    As an umbrella company, we may process data on behalf of our
                    ventures, products, or partners as part of our operations.
                    This data is handled according to our Data Processing
                    Agreements and remains the property of the respective
                    entities. We act as a data processor in these instances.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-green-500/20 to-green-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-green-500/20">
                  <Database size={20} className="text-green-400" />
                </div>
                2. Legal Basis for Processing (GDPR)
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Under the General Data Protection Regulation (GDPR), we
                  process your personal data based on:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Contract Performance (Article 6(1)(b)):
                      </strong>{" "}
                      To fulfill our contractual obligations when providing
                      development services, consulting, or project delivery.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Consent (Article 6(1)(a)):
                      </strong>{" "}
                      When you provide explicit consent for marketing
                      communications, newsletters, or non-essential data
                      processing.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Legitimate Interests (Article 6(1)(f)):
                      </strong>{" "}
                      For business operations, fraud prevention, service
                      improvement, and security measures.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Legal Obligations (Article 6(1)(c)):
                      </strong>{" "}
                      To comply with applicable laws, tax regulations, and legal
                      requirements.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-purple-500/20">
                  <Settings size={20} className="text-purple-400" />
                </div>
                3. How We Use Your Information
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Deliver and manage development projects, software
                      solutions, and consulting services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Process payments and manage billing for our services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Communicate about projects, updates, and support inquiries
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Improve our services, website, and user experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Send marketing communications (with your consent)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Detect and prevent fraud, abuse, or security threats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Comply with legal obligations and enforce our Terms of
                      Service
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-violet-500/20 to-violet-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-violet-500/20">
                  <Users size={20} className="text-violet-400" />
                </div>
                4. Disclosure of Your Information
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-6">
                  We may share your information in the following circumstances:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">Service Providers:</strong>{" "}
                      Third-party vendors who assist with payment processing,
                      cloud hosting, analytics, email delivery, and other
                      essential services. These providers are contractually
                      obligated to protect your data.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Legal Requirements:
                      </strong>{" "}
                      When required by law, court order, or government
                      regulation, or to protect our rights, property, or safety.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Business Transfers:
                      </strong>{" "}
                      In connection with a merger, acquisition, sale of assets,
                      or bankruptcy, your information may be transferred to the
                      acquiring entity.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">With Your Consent:</strong>{" "}
                      We may share information when you explicitly authorize us
                      to do so.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-pink-500/20 to-pink-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-pink-500/20">
                  <Lock size={20} className="text-pink-400" />
                </div>
                5. Data Security
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect
                  your data:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>Encryption in transit (TLS/SSL) and at rest</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>Secure authentication and access controls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Regular security audits and vulnerability assessments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Employee training on data protection and privacy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>Incident response procedures for data breaches</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Despite our efforts, no method of transmission over the
                  internet is 100% secure. We cannot guarantee absolute security
                  but are committed to protecting your data.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-cyan-500/20 to-cyan-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-cyan-500/20">
                  <FileText size={20} className="text-cyan-400" />
                </div>
                6. Your Rights Under GDPR
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you are located in the European Economic Area (EEA), you
                  have the following rights:
                </p>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right of Access (Article 15):
                      </strong>{" "}
                      Request a copy of your personal data we hold.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Rectification (Article 16):
                      </strong>{" "}
                      Request correction of inaccurate or incomplete data.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Erasure (Article 17):
                      </strong>{" "}
                      Request deletion of your data (&quot;right to be forgotten&quot;).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Restrict Processing (Article 18):
                      </strong>{" "}
                      Request limitation of how we process your data.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Data Portability (Article 20):
                      </strong>{" "}
                      Receive your data in a structured, commonly used format.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Object (Article 21):
                      </strong>{" "}
                      Object to processing based on legitimate interests or for
                      direct marketing.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Withdraw Consent:
                      </strong>{" "}
                      Withdraw consent at any time where processing is based on
                      consent.
                    </div>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  To exercise these rights, contact us at privacy@orvex.cc. We
                  will respond within 30 days as required by GDPR.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-emerald-500/20 to-emerald-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-emerald-500/20">
                  <Globe size={20} className="text-emerald-400" />
                </div>
                7. Your Rights Under CCPA
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you are a California resident, the California Consumer
                  Privacy Act (CCPA) grants you:
                </p>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">Right to Know:</strong>{" "}
                      Request disclosure of categories and specific pieces of
                      personal information collected, sources, business
                      purposes, and third parties with whom we share data.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">Right to Delete:</strong>{" "}
                      Request deletion of personal information we have collected
                      (subject to certain exceptions).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">Right to Opt-Out:</strong>{" "}
                      Opt-out of the sale of personal information (we do not
                      sell personal information).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Right to Non-Discrimination:
                      </strong>{" "}
                      We will not discriminate against you for exercising your
                      CCPA rights.
                    </div>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">
                    Categories of Personal Information We Collect:
                  </strong>
                </p>
                <ul className="space-y-2 text-gray-300 ml-4 mb-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>Identifiers (name, email, phone, IP address)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Commercial information (purchase history, project details)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Internet activity (browsing history, interactions with our
                      website)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Professional information (company name, job title)
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  To exercise your CCPA rights, contact us at privacy@orvex.cc
                  or call us. We will verify your identity before processing
                  your request and respond within 45 days.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-indigo-500/20 to-indigo-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                  <FileText size={20} className="text-indigo-400" />
                </div>
                8. Data Retention
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-6">
                  We retain personal data only as long as necessary for the
                  purposes outlined in this policy:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300 border-collapse">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold text-white bg-white/5">
                          Data Type
                        </th>
                        <th className="px-6 py-4 text-left font-semibold text-white bg-white/5">
                          Retention Period
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700/50">
                        <td className="px-6 py-4">
                          Account and client information
                        </td>
                        <td className="px-6 py-4">
                          While account is active + 3 years after termination
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="px-6 py-4">
                          Project data and documentation
                        </td>
                        <td className="px-6 py-4">
                          Duration of project + 7 years (for legal/accounting)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="px-6 py-4">
                          Financial and transaction records
                        </td>
                        <td className="px-6 py-4">
                          7 years (legal requirement)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="px-6 py-4">Support communications</td>
                        <td className="px-6 py-4">3 years</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          Website analytics and logs
                        </td>
                        <td className="px-6 py-4">26 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-yellow-500/20 to-yellow-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-yellow-500/20">
                  <Users size={20} className="text-yellow-400" />
                </div>
                9. International Data Transfers
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure
                  appropriate safeguards are in place, including Standard
                  Contractual Clauses (SCCs) approved by the European Commission
                  for GDPR compliance, and we only transfer data to countries
                  with adequate data protection laws or appropriate safeguards.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-red-500/20 to-red-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-red-500/20">
                  <Lock size={20} className="text-red-400" />
                </div>
                10. Children&apos;s Privacy
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  Our services are not intended for individuals under 18 years
                  of age. We do not knowingly collect personal information from
                  children. If we become aware that we have collected
                  information from a child, we will delete it immediately. If
                  you believe we have collected information from a child, please
                  contact us immediately.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-teal-500/20 to-teal-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-teal-500/20">
                  <Settings size={20} className="text-teal-400" />
                </div>
                11. Cookies and Tracking Services
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking Services to enhance your
                  experience:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">Essential Cookies:</strong>{" "}
                      Required for core functionality and cannot be disabled.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">Analytics Cookies:</strong>{" "}
                      Help us understand how visitors use our website (e.g.,
                      Google Analytics).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <div>
                      <strong className="text-white">
                        Functional Cookies:
                      </strong>{" "}
                      Remember your preferences and settings.
                    </div>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can control cookies through your browser settings. Note
                  that disabling cookies may affect website functionality.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-violet-500/20 to-violet-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-violet-500/20">
                  <Shield size={20} className="text-violet-400" />
                </div>
                12. Data Protection Officer & Supervisory Authority
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  For GDPR-related inquiries, you can contact our Data
                  Protection Officer at:
                </p>
                <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                  <p className="text-white font-mono wrap-break-word text-lg">
                    privacy@orvex.cc
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  If you are located in the EEA, you have the right to lodge a
                  complaint with your local supervisory authority if you believe
                  we have violated GDPR. A list of supervisory authorities can
                  be found at{" "}
                  <a
                    href="https://edpb.europa.eu/about-edpb/board/members_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    edpb.europa.eu
                  </a>
                  .
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-blue-500/20">
                  <MessageCircle size={20} className="text-blue-400" />
                </div>
                13. Changes to This Privacy Policy
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the &quot;Last updated&quot; date. For
                  significant changes, we may also notify you via email or
                  through our services. Your continued use of our services after
                  changes become effective constitutes acceptance of the updated
                  policy.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-violet-500/20 to-violet-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-violet-500/20">
                  <Mail size={20} className="text-violet-400" />
                </div>
                14. Contact Us
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions about this Privacy Policy or wish to
                  exercise your rights, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="bg-neutral-900 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Email:</p>
                    <p className="text-white font-mono wrap-break-word text-lg">
                      privacy@orvex.cc
                    </p>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">
                      General Support:
                    </p>
                    <p className="text-white font-mono wrap-break-word text-lg">
                      support@orvex.cc
                    </p>
                  </div>
                  <div className="bg-neutral-900 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Company:</p>
                    <p className="text-white text-lg">Orvex Services</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
