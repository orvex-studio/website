import {
  Shield,
  FileText,
  AlertTriangle,
  Scale,
  Gavel,
  MessageCircle,
  XCircle,
  CheckCircle,
  Code,
  Briefcase,
  DollarSign,
} from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-400 text-lg">
                Effective Date: January 2025
              </p>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-zinc-950/80 to-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="space-y-12">
            <section className="group">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed text-lg">
                  These Terms of Service ("Terms") govern your use of Orvex
                  Services' ("Orvex," "we," "our," or "us") services, including
                  our products, platforms, and ventures, including but not
                  limited to web development, mobile app development, enterprise
                  software solutions, cloud services, consulting, and related
                  services (collectively, "Services"). By engaging with Orvex
                  Services or using our Services, you agree to be bound by these
                  Terms. Please read them carefully.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-blue-500/20">
                  <Shield size={20} className="text-blue-400" />
                </div>
                1. Acceptance of Terms
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using our Services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  and our Privacy Policy. If you do not agree to these Terms,
                  you may not use our Services. These Terms apply to all
                  clients, users, and visitors of Orvex Services.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-green-500/20 to-green-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-green-500/20">
                  <Briefcase size={20} className="text-green-400" />
                </div>
                2. Description of Services
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Orvex Services provides custom software development services,
                  including:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Web application development and full-stack solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Mobile application development (iOS, Android,
                      cross-platform)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Enterprise software systems and backend infrastructure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>Cloud solutions and serverless architectures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>UI/UX design and product strategy consulting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Technical consulting and software architecture services
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Specific services, deliverables, timelines, and pricing are
                  defined in individual project agreements, statements of work
                  (SOW), or service contracts.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-purple-500/20 to-purple-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-purple-500/20">
                  <Code size={20} className="text-purple-400" />
                </div>
                3. Use of Services
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree to use our Services only for lawful purposes and in
                  accordance with these Terms:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      You will provide accurate, complete, and current
                      information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      You will not use our Services for any illegal or
                      unauthorized purpose
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      You will not violate any applicable laws, regulations, or
                      third-party rights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      You will not interfere with or disrupt our Services or
                      servers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      You will not attempt to gain unauthorized access to our
                      systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      You will not use our Services to develop or distribute
                      malicious software, spam, or content that infringes
                      intellectual property rights
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-violet-500/20 to-violet-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-violet-500/20">
                  <DollarSign size={20} className="text-violet-400" />
                </div>
                4. Payment Terms
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    4.1 Fees and Billing
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Payment terms, including fees, payment schedules, and
                    methods, will be specified in your project agreement or SOW.
                    Unless otherwise agreed:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Fees are due according to the payment schedule in your
                        agreement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Late payments may incur interest charges or result in
                        service suspension
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        All fees are non-refundable unless otherwise specified
                        in writing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        You are responsible for any taxes applicable to the
                        Services
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    4.2 Refund Policy
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    All sales are final. Orvex Services does not offer refunds
                    for completed work, partially completed projects, or
                    services rendered, except as may be explicitly agreed upon
                    in writing in your project agreement. This includes but is
                    not limited to: completed development work, delivered code,
                    design assets, consulting sessions, or any other services
                    provided.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-red-500/20 to-red-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-red-500/20">
                  <FileText size={20} className="text-red-400" />
                </div>
                5. Intellectual Property Rights
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    5.1 Client-Owned Work Product
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Upon full payment, ownership of custom-developed code,
                    designs, and deliverables created specifically for you will
                    transfer to you as specified in your project agreement. You
                    will receive a license or assignment of rights as agreed
                    upon.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    5.2 Orvex Services' Intellectual Property
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Orvex Services retains all rights to:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Our proprietary frameworks, tools, libraries, and
                        methodologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Pre-existing code, templates, or assets not created
                        specifically for your project
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Our brand, trademarks, logos, and marketing materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Third-party open-source software used in projects
                        (subject to their respective licenses)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    5.3 License to Use Our Services
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You are granted a limited, non-exclusive, non-transferable
                    license to use the Services and deliverables solely for your
                    internal business purposes as specified in your agreement.
                    You may not resell, redistribute, or reverse engineer our
                    Services without written permission.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-pink-500/20 to-pink-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-pink-500/20">
                  <CheckCircle size={20} className="text-pink-400" />
                </div>
                6. Project Deliverables and Acceptance
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Deliverables will be provided according to the timeline and
                  specifications in your project agreement. You will have a
                  reasonable period (typically 14 days) to review and accept
                  deliverables. If you do not provide feedback or request
                  changes within this period, deliverables will be deemed
                  accepted. Requested changes beyond the original scope may
                  incur additional fees.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-yellow-500/20 to-yellow-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-yellow-500/20">
                  <AlertTriangle size={20} className="text-yellow-400" />
                </div>
                7. Warranties and Disclaimers
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    7.1 Service Warranties
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We warrant that Services will be performed in a professional
                    and workmanlike manner consistent with industry standards.
                    We will use reasonable efforts to ensure deliverables are
                    free from material defects for a period of 30 days after
                    delivery.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    7.2 Disclaimers
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    EXCEPT AS EXPRESSLY SET FORTH ABOVE, OUR SERVICES ARE
                    PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
                    ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT
                    LIMITED TO:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Implied warranties of merchantability, fitness for a
                        particular purpose, or non-infringement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Warranties that Services will be uninterrupted,
                        error-free, or secure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Warranties regarding third-party software, APIs, or
                        services integrated into deliverables
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-cyan-500/20 to-cyan-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-cyan-500/20">
                  <Scale size={20} className="text-cyan-400" />
                </div>
                8. Limitation of Liability
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORVEX Services SHALL
                  NOT BE LIABLE FOR:
                </p>
                <ul className="space-y-3 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Any indirect, incidental, special, consequential, or
                      punitive damages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Loss of profits, revenue, data, or business opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Damages resulting from your use or inability to use the
                      Services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 shrink-0"></div>
                    <span>
                      Issues arising from third-party services, APIs, or
                      software
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Our total liability for any claims arising from or related to
                  these Terms or the Services shall not exceed the total amount
                  paid by you to Orvex Services in the 12 months preceding the
                  claim. Some jurisdictions do not allow the exclusion of
                  certain warranties or limitation of liability, so some of the
                  above limitations may not apply to you.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-indigo-500/20 to-indigo-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-indigo-500/20">
                  <XCircle size={20} className="text-indigo-400" />
                </div>
                9. Termination
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    9.1 Termination by You
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You may terminate Services by providing written notice. You
                    remain responsible for all fees incurred up to the
                    termination date and any early termination fees specified in
                    your agreement.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    9.2 Termination by Orvex Services
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We may suspend or terminate Services immediately, with or
                    without notice, if:
                  </p>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        You breach these Terms or your project agreement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>You fail to make payments when due</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        You engage in fraudulent, illegal, or harmful activities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 shrink-0"></div>
                      <span>
                        Required by law or to protect our rights or safety
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    9.3 Effect of Termination
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Upon termination, your right to use Services ceases
                    immediately. We may delete your data after a reasonable
                    retention period. Sections of these Terms that by their
                    nature should survive termination will survive, including
                    intellectual property, warranties, limitations of liability,
                    and dispute resolution.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-emerald-500/20 to-emerald-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-emerald-500/20">
                  <Gavel size={20} className="text-emerald-400" />
                </div>
                10. Dispute Resolution
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    10.1 Informal Resolution
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Before initiating formal proceedings, you agree to contact
                    us at support@orvex.cc to attempt to resolve any dispute
                    informally. We will work in good faith to resolve disputes
                    within 30 days of receiving your notice.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    10.2 Binding Arbitration
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    If informal resolution fails, any dispute, controversy, or
                    claim arising out of or relating to these Terms or Services
                    shall be resolved through binding arbitration in accordance
                    with the rules of the American Arbitration Association (AAA)
                    or a mutually agreed arbitrator. The arbitration will be
                    conducted in English.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You waive your right to a jury trial and agree not to
                    participate in class action lawsuits or class-wide
                    arbitrations against Orvex Services.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h3 className="font-semibold text-white mb-3">
                    10.3 Exceptions
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Either party may seek injunctive relief in court to prevent
                    irreparable harm or to enforce intellectual property rights,
                    without first engaging in arbitration.
                  </p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-teal-500/20 to-teal-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-teal-500/20">
                  <FileText size={20} className="text-teal-400" />
                </div>
                11. Confidentiality
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  Both parties agree to maintain the confidentiality of
                  proprietary information shared during the course of providing
                  Services. This includes business plans, technical
                  specifications, source code, and other sensitive information.
                  Confidentiality obligations survive termination of Services
                  and will be detailed in your project agreement or a separate
                  Non-Disclosure Agreement (NDA).
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-violet-500/20 to-violet-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-violet-500/20">
                  <Shield size={20} className="text-violet-400" />
                </div>
                12. Data Protection and Privacy
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  We handle personal data in accordance with our Privacy Policy
                  and applicable data protection laws, including GDPR and CCPA.
                  When we process data on your behalf as part of Services, we
                  act as a data processor and will enter into appropriate Data
                  Processing Agreements as required by law.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-blue-500/20 to-blue-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-blue-500/20">
                  <FileText size={20} className="text-blue-400" />
                </div>
                13. Modifications to Terms
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time.
                  Material changes will be notified via email or through our
                  Services. Your continued use of Services after changes become
                  effective constitutes acceptance of the modified Terms. If you
                  do not agree to the changes, you must discontinue use of
                  Services.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-pink-500/20 to-pink-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-pink-500/20">
                  <FileText size={20} className="text-pink-400" />
                </div>
                14. Entire Agreement
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed">
                  These Terms, together with your project agreement, SOW,
                  Privacy Policy, and any other referenced documents, constitute
                  the entire agreement between you and Orvex Services regarding
                  the Services. They supersede all prior agreements,
                  negotiations, and communications, whether oral or written.
                </p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="bg-linear-to-br from-violet-500/20 to-violet-600/20 w-10 h-10 rounded-xl flex items-center justify-center mr-4 border border-violet-500/20">
                  <MessageCircle size={20} className="text-violet-400" />
                </div>
                15. Contact Information
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="bg-neutral-900 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">Email:</p>
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
