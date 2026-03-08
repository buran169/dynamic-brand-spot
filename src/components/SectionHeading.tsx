import { useI18n } from "@/lib/i18n";

export function SectionHeading({ title, subtitle, gradient = true }: { title: string; subtitle?: string; gradient?: boolean }) {
  const { t } = useI18n();
  
  return (
    <div className="text-center mb-12">
      <h2 className={`text-4xl font-bold mb-4 ${gradient ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
