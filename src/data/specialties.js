/** Content for dynamic specialty pages; feature titles match “Our Specialties” bullet items. */

const feature = (title, description, icon) => ({ title, description, icon })

export const specialties = [
  {
    slug: 'mental-health',
    badge: 'Expert Psychiatry & Therapy',
    titleBefore: 'Mental',
    titleAccent: 'Health.',
    description:
      'Compassionate psychiatric care for anxiety, depression, and smoking cessation. Holistic therapy with evidence-based medicine—wherever you are.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvlYXh7a2hDDDhOyF6KM6nWVrqWmvGnq__s2VnHQf3Hyw8Q7vkgwsIf5Ie3dy4BIY9NqLnnDw6csRa6iCmny-kdAiIFpXPypIZ6pX-mO0FHVJ34HGxMrkIUDS4VdOy0yIdVkfQkQZXKbK8K7Ocr3-DSZ_IerzT-9vVmF44uaGc1jMKevwog03zs6bNSQhx0YS_WFG1xpv5k0wbElTK6dk8NNpOgJxfQh8YjSz4ASp22dF6g-8zg9yU_K3dH-uPXpwEt2cHaZrAh27I',
    overlay: { icon: 'timer', title: 'Timely Care', subtitle: 'Structured visits that fit your schedule' },
    features: [
      feature(
        'Anxiety',
        'Evidence-based assessment and treatment plans for generalized anxiety, panic, and related symptoms.',
        'self_improvement',
      ),
      feature(
        'Depression',
        'Supportive medication management and follow-up aligned with your goals and safety.',
        'psychology',
      ),
      feature(
        'Help to Quit Smoking',
        'Coaching and pharmacologic options to support cessation with clinician oversight.',
        'smoke_free',
      ),
    ],
  },
  {
    slug: 'chronic-conditions',
    badge: 'Long-Term Condition Care',
    titleBefore: 'Chronic',
    titleAccent: 'Conditions.',
    description:
      'Expert management with proactive monitoring and personalized treatment plans for conditions that need steady, thoughtful attention.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'monitor_heart', title: 'Proactive Monitoring', subtitle: 'Trend-aware follow-ups' },
    features: [
      feature(
        'Acid Reflux (GERD)',
        'Symptom review, lifestyle guidance, and medication optimization when appropriate.',
        'gastroenterology',
      ),
      feature(
        'Asthma',
        'Virtual check-ins to adjust plans and reduce flare risk with clear action steps.',
        'air',
      ),
      feature('Gout', 'Acute flare support and uric-acid strategies coordinated with your history.', 'biotech'),
      feature(
        'High Blood Pressure',
        'Home readings, medication titration discussion, and cardiovascular risk awareness.',
        'cardiology',
      ),
      feature(
        'High Cholesterol',
        'Lipid goals, side-effect review, and adherence support through your care path.',
        'monitor_heart',
      ),
      feature(
        'Hypothyroidism',
        'Symptom tracking and lab-guided medication adjustments with specialist oversight.',
        'endocrinology',
      ),
      feature(
        'Weight Loss',
        'Medically supervised options with nutrition coaching and safety monitoring.',
        'monitor_weight',
      ),
    ],
  },
  {
    slug: 'sexual-health',
    badge: 'Private, Confidential Care',
    titleBefore: 'Sexual',
    titleAccent: 'Health.',
    description:
      'Discreet, professional care with absolute privacy—for common concerns that deserve expert attention.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'lock', title: 'HIPAA-Aligned', subtitle: 'Discreet visits' },
    features: [
      feature(
        'Genital Herpes',
        'Outbreak management, suppressive therapy discussion, and education without judgment.',
        'health_and_safety',
      ),
      feature(
        'Oral Herpes (Cold Sores)',
        'Antiviral planning and trigger reduction tailored to your recurrence pattern.',
        'face',
      ),
    ],
  },
  {
    slug: 'acute-care-general-issues',
    badge: 'Same-Day Virtual Access',
    titleBefore: 'Acute Care &',
    titleAccent: 'General Issues.',
    description:
      'Rapid diagnostics and treatment for everyday illnesses and concerns—without the waiting room when virtual care is appropriate.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'schedule', title: 'Fast Triage', subtitle: 'Clear next steps' },
    features: [
      feature(
        'Colds and Flu',
        'Symptom review, supportive care plans, and red-flag guidance when escalation is needed.',
        'thermostat',
      ),
      feature('Hair Loss', 'Pattern assessment, medication discussion, and realistic timelines.', 'content_cut'),
      feature('Headaches', 'Triage of primary vs concerning features with acute relief strategies.', 'neurology'),
      feature('Sinus Infection',
        'Duration-based evaluation, comfort measures, and antibiotic stewardship.',
        'nose',
      ),
      feature('Sore Throat', 'Rapid assessment of viral vs bacterial patterns when clinically indicated.', 'medical_services'),
      feature('Stomach Bugs',
        'Hydration, anti-nausea options, and monitoring for dehydration or complications.',
        'sick',
      ),
      feature(
        'Urinary Tract Infection (UTI)',
        'Symptom-driven workup, treatment when appropriate, and prevention tips.',
        'water_drop',
      ),
      feature('Vomiting', 'Medication review, hydration guidance, and ER criteria when red flags appear.', 'local_hospital'),
    ],
  },
  {
    slug: 'womens-health',
    badge: "Women's Wellness",
    titleBefore: "Women's",
    titleAccent: 'Health.',
    description:
      'Comprehensive gynecological and wellness support with discreet, evidence-based virtual care.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'female', title: 'Specialist-Guided', subtitle: 'Privacy first' },
    features: [
      feature(
        'Bacterial Vaginosis (BV)',
        'Evaluation, treatment planning, and recurrence prevention strategies.',
        'female',
      ),
      feature(
        'Period Cramp Relief',
        'Non-opioid pain strategies and medication options suited to your history.',
        'medication',
      ),
      feature(
        'Vaginal Dryness',
        'Hormonal and non-hormonal approaches with symptom-focused follow-up.',
        'spa',
      ),
      feature(
        'Vaginal Yeast Infection',
        'Confirmatory guidance, antifungal selection, and when to seek in-person care.',
        'healing',
      ),
      feature(
        'Yeast Infections',
        'Accessible evaluation, treatment, and education on triggers and recurrence.',
        'health_metrics',
      ),
    ],
  },
  {
    slug: 'allergies-immune-support',
    badge: 'Seasonal & Ocular Relief',
    titleBefore: 'Allergies &',
    titleAccent: 'Immune Support.',
    description:
      'Relief and guidance for seasonal symptoms and common eye irritation from a coordinated virtual path.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'allergy', title: 'Targeted Plans', subtitle: 'Symptom-specific care' },
    features: [
      feature(
        'Seasonal Allergies',
        'Antihistamine strategies, nasal regimens, and escalation criteria for tougher seasons.',
        'wb_sunny',
      ),
      feature(
        'Pink Eye (Conjunctivitis)',
        'Red-flag screening, infectious vs allergic patterns, and hygiene guidance.',
        'visibility',
      ),
    ],
  },
  {
    slug: 'mens-health',
    badge: "Men's Clinical Support",
    titleBefore: "Men's",
    titleAccent: 'Health.',
    description:
      'Focused men’s health support with direct clinician conversations and clear treatment options.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'male', title: 'Direct Care', subtitle: 'No fluff—clinical clarity' },
    features: [
      feature(
        'Erectile Dysfunction',
        'Medical evaluation, contraindication review, and treatment options aligned to your profile.',
        'favorite',
      ),
      feature(
        'Hair Loss',
        'Pattern assessment, medication discussion, and follow-up on response.',
        'content_cut',
      ),
    ],
  },
  {
    slug: 'eye-ear-issues',
    badge: 'Eye & ENT-Focused Triage',
    titleBefore: 'Eye & Ear',
    titleAccent: 'Issues.',
    description:
      'Virtual assessment for common eye and ear complaints with clear guidance on self-care versus urgent escalation.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8En2sY426Nhj2FbPdce3rsGd09QtBGY_DAjc54TfuOP5VRpT0m9uEMZIej7ILHjARxla5h1ELpd9FEKWtyGyr9P2yvVZjN2VSHw4zh6GQBbygeKYPt6dablbyPcf3WUhaMWWZhUaKBp5tx7ES5JiXcsDq6Dvqitd2BGwt5GrAMOH7s8zqKLKuN2F4UBbr0sQuu8LFS1JzSt-1sRyVzBw-9uNTfqMwNwX27Ley1DAisWnasz0eHCKejFvXVQWTO8jIqgSTERUhMUW',
    overlay: { icon: 'visibility', title: 'Clear Guidance', subtitle: 'What to watch for' },
    features: [
      feature(
        'Eye Issues',
        'Screening questions, photo review when helpful, and red-flag pathways.',
        'remove_red_eye',
      ),
      feature(
        'Pink Eye (Conjunctivitis)',
        'Pattern recognition, drops guidance, and contagion counseling.',
        'visibility',
      ),
    ],
  },
  {
    slug: 'skin-minor-injuries',
    badge: 'Expert Dermatological Care',
    titleBefore: 'Skin & Minor',
    titleAccent: 'Injuries.',
    description:
      'Immediate diagnostic precision for wounds, rashes, and minor skin concerns. Virtual triage with board-certified support.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBs1aeqvxGIRmKt6CZFkoXAZCTK1-rurkwYZiZx3nKINECklxgbGmwXX7-s0gEmisumh0KJC2ns69QrAIu84mU95ikFWwN3FzGwUTeKEdORE9rBxC2iI1bTEgojpcu-IVTrm0QzLoQWoO2zvbz5G2yky0lpjXInqIym5pcKkxqNWX9irQD83TTgVAJpTu3zQAYiLn3aMxZ-I9GnSWQs8-etkhY_7rSDTv4PPddZAM-qmeqNCf3_xEVN5svx5oQje1IJgTKCPLGkrl2S',
    overlay: { icon: 'timer', title: '15-Min Triage', subtitle: 'Average response focus' },
    features: [
      feature(
        'Minor Cuts',
        'Wound photos, closure guidance, infection watch, and when to seek in-person care.',
        'medical_services',
      ),
      feature(
        'Skin issues',
        'Rashes, irritation, and changes reviewed with structured imaging where useful.',
        'dermatology',
      ),
    ],
  },
  {
    slug: 'medication-management',
    badge: 'Safe Refill Path',
    titleBefore: 'Medication',
    titleAccent: 'Management.',
    description:
      'Streamlined clinician review for stable medication refills when clinically appropriate—aligned with your history and safety.',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5uFDngr5oqyIAud_4dm3n3zlS3AHzZZEkJGF6_Gvlvhnt9m0Ik6UUAjMcGlh1YWwPQFyLn5zPne7JnrSHTGe8c33U4MWQxnkRm1KKwZkyVsUEvEERxKt2Un7IUA39tI_05nO8ciFrOa-h4jl7KHmgDNeVgjLMmsJe40jc_dyzXGWnaOl_CwtsZXpRd0bgeHplXa0lFzuF6j7Xh7A68BQ_0txLH_S1CWiMgyhgaLjw6TS0IurHqQRlyo537gGc7K7Ti2S_GOcSHCjI',
    overlay: { icon: 'pill', title: 'Reviewed Refills', subtitle: 'Clinical oversight' },
    features: [
      feature(
        'Prescription Refill',
        'Eligibility screening, interaction review, and pharmacy routing when approved.',
        'prescriptions',
      ),
    ],
  },
]

export function getSpecialtyBySlug(slug) {
  return specialties.find((s) => s.slug === slug) ?? null
}

export const specialtySlugs = specialties.map((s) => s.slug)
