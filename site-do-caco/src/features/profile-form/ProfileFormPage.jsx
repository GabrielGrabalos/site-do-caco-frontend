import { Navigate } from 'react-router-dom';
import { usePageTitle } from '@/shared/hooks/usePageTitle';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useProfileFormVM } from './useProfileFormVM';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, GraduationCap, Loader2 } from 'lucide-react';

export function ProfileFormPage() {
  usePageTitle('Completar Perfil');
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <ProfileFormContent />;
}

function ProfileFormContent() {
  const {
    course,
    setCourse,
    otherCourseName,
    setOtherCourseName,
    entryYear,
    setEntryYear,
    submitting,
    error,
    isOther,
    handleSubmit,
    courseOptions,
    yearOptions,
  } = useProfileFormVM();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Bem-vinde ao CACo!</h1>
          <p className="text-muted-foreground text-sm">
            Antes de continuar, precisamos de algumas informações sobre você.
            Isso nos ajuda a personalizar sua experiência.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulário de perfil</CardTitle>
            <CardDescription>
              Preencha as informações abaixo. Este formulário só pode ser preenchido uma vez.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Erro global */}
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Curso */}
              <div className="space-y-2">
                <Label>Curso</Label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {courseOptions.map((opt) => (
                    <Badge
                      key={opt.value}
                      variant={course === opt.value ? 'default' : 'outline'}
                      className={`cursor-pointer px-4 py-1.5 text-sm transition-all ${
                        course !== opt.value && 'hover:bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => setCourse(opt.value)}
                    >
                      {opt.label}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Nome do curso (só quando OUTRO) */}
              {isOther && (
                <div className="space-y-2">
                  <Label htmlFor="otherCourseName">Nome do curso</Label>
                  <Input
                    id="otherCourseName"
                    type="text"
                    placeholder="Ex.: Sistemas de Informação"
                    value={otherCourseName}
                    onChange={(e) => setOtherCourseName(e.target.value)}
                    maxLength={50}
                    autoFocus
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {otherCourseName.length}/50 caracteres
                  </p>
                </div>
              )}

              {/* Ano de ingresso */}
              <div className="space-y-2">
                <Label htmlFor="entryYear">Ano de ingresso</Label>
                <Select value={String(entryYear)} onValueChange={setEntryYear}>
                  <SelectTrigger id="entryYear">
                    <SelectValue placeholder="Selecione o ano de ingresso" />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map((opt) => (
                      <SelectItem key={opt.value} value={String(opt.value)}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Salvar e continuar'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          Centro Acadêmico da Computação — Unicamp
        </p>
      </div>
    </div>
  );
}
