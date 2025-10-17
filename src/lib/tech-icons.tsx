import { IconType } from 'react-icons';
import { 
  SiPython, 
  SiReact, 
  SiTypescript, 
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGithubactions,
  SiAmazonwebservices,
  SiAmazonredshift,
  SiTableau,
  SiPowerbi,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiDatabricks,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiAnthropic,
  SiPandas,
  SiNumpy,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiApachespark,
  SiApachekafka,
  SiTerraform,
  SiGraphql,
  SiMicrosoftazure,
  SiSnowflake,
  SiLooker,
  SiSharepoint,
} from 'react-icons/si';
import { 
  FaDatabase, 
  FaBrain, 
  FaRobot, 
  FaChartLine, 
  FaTools,
  FaCloud,
  FaServer,
  FaChartBar,
  FaLightbulb,
  FaHandshake,
  FaStore,
  FaCogs,
  FaProjectDiagram,
  FaUserTie,
  FaGraduationCap,
} from 'react-icons/fa';
import { 
  MdAutoAwesome, 
  MdDataExploration,
  MdEngineering,
  MdBusiness,
} from 'react-icons/md';
import { 
  GiArtificialIntelligence,
  GiTeamIdea,
} from 'react-icons/gi';
import { 
  HiChartBar,
  HiCube,
} from 'react-icons/hi';
import { 
  BiCodeAlt,
  BiData,
} from 'react-icons/bi';

// Technology to icon mapping
export const techIcons: Record<string, { icon: IconType; color: string }> = {
  // Programming Languages
  'Python': { icon: SiPython, color: '#3776AB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'SQL': { icon: FaDatabase, color: '#CC2927' },
  
  // Frontend
  'React': { icon: SiReact, color: '#61DAFB' },
  'React.js': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF' },
  
  // Backend & APIs
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Express': { icon: SiExpress, color: '#000000' },
  'REST APIs': { icon: FaServer, color: '#FF6C37' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  
  // AI & ML
  'AI Agents': { icon: FaRobot, color: '#FF6B6B' },
  'Agentic AI': { icon: GiArtificialIntelligence, color: '#FF6B6B' },
  'LLMs': { icon: FaBrain, color: '#8B5CF6' },
  'Generative AI': { icon: MdAutoAwesome, color: '#F59E0B' },
  'OpenAI API': { icon: SiOpenai, color: '#412991' },
  'Claude API': { icon: SiAnthropic, color: '#D4A574' },
  'Machine Learning': { icon: FaBrain, color: '#8B5CF6' },
  
  // Cloud & Infrastructure
  'AWS': { icon: SiAmazonwebservices, color: '#FF9900' },
  'AWS QuickSight': { icon: SiAmazonwebservices, color: '#FF9900' },
  'Azure': { icon: SiMicrosoftazure, color: '#0078D4' },
  'Azure AI Foundry': { icon: SiMicrosoftazure, color: '#0078D4' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5' },
  'Terraform': { icon: SiTerraform, color: '#7B42BC' },
  
  // Databases
  'Redshift': { icon: SiAmazonredshift, color: '#8C4FFF' },
  'SQL Server': { icon: SiMicrosoftsqlserver, color: '#CC2927' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'Elasticsearch': { icon: SiElasticsearch, color: '#005571' },
  'Snowflake': { icon: SiSnowflake, color: '#29B5E8' },
  
  // BI & Analytics
  'Power BI': { icon: SiPowerbi, color: '#F2C811' },
  'Tableau': { icon: SiTableau, color: '#E97627' },
  'Looker': { icon: SiLooker, color: '#4285F4' },
  'Databricks': { icon: SiDatabricks, color: '#FF3621' },
  'Data Warehousing': { icon: FaDatabase, color: '#4A90E2' },
  'Data Architecture': { icon: HiCube, color: '#6366F1' },
  'BI': { icon: FaChartBar, color: '#10B981' },
  'ETL': { icon: BiData, color: '#8B5CF6' },
  'Data Pipelining': { icon: FaProjectDiagram, color: '#059669' },
  'Data Engineering': { icon: MdDataExploration, color: '#3B82F6' },
  
  // Tools & Platforms
  'Git': { icon: SiGit, color: '#F05032' },
  'dbt': { icon: BiCodeAlt, color: '#FF694B' },
  'Pandas': { icon: SiPandas, color: '#150458' },
  'NumPy': { icon: SiNumpy, color: '#013243' },
  'Apache Spark': { icon: SiApachespark, color: '#E25A1C' },
  'Apache Kafka': { icon: SiApachekafka, color: '#231F20' },
  'SharePoint': { icon: SiSharepoint, color: '#0078D4' },
  'DataNet ETL': { icon: FaCogs, color: '#6366F1' },
  
  // Processes & Methodologies
  'Process Automation': { icon: FaCogs, color: '#10B981' },
  'Project Management': { icon: MdBusiness, color: '#8B5CF6' },
  'Risk Management': { icon: FaChartLine, color: '#EF4444' },
  'Quantitative Analysis': { icon: HiChartBar, color: '#3B82F6' },
  'Options Trading': { icon: FaChartLine, color: '#10B981' },
  'Backtesting': { icon: FaChartBar, color: '#6366F1' },
  'Business Management': { icon: MdBusiness, color: '#8B5CF6' },
  'Operations': { icon: FaCogs, color: '#059669' },
  'Marketing': { icon: FaLightbulb, color: '#F59E0B' },
  'Financial Planning': { icon: FaChartLine, color: '#10B981' },
  'Customer Service': { icon: FaHandshake, color: '#3B82F6' },
  'Mentorship': { icon: FaGraduationCap, color: '#8B5CF6' },
  'Community Building': { icon: GiTeamIdea, color: '#10B981' },
  'Career Coaching': { icon: FaUserTie, color: '#6366F1' },
};

// Get icon for a technology, with fallback
export const getTechIcon = (tech: string): { icon: IconType; color: string } => {
  return techIcons[tech] || { icon: FaTools, color: '#6B7280' };
};
